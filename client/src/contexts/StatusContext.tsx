import React, {
  useEffect,
  createContext,
  useContext,
  useState,
  useMemo,
} from "react";
import { getAllStatus } from "../services/statusAPIs";
import { type IStatus } from "../utils/types";

interface IStatusContextState {
  status: IStatus[];
  setStatus: React.Dispatch<React.SetStateAction<IStatus[]>>;
  loading: boolean;
  error: null;
}

const StatusContext = createContext<IStatusContextState | null>(null);

export default function StatusContextProvider({ children }: any) {
  const [status, setStatus] = useState<IStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStatus = async () => {
    try {
      const result = await getAllStatus();
      setStatus(result.data);
      setLoading(false);
    } catch (err: any) {
      setError(err);
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const StatusContextState = useMemo(
    () => ({
      status,
      setStatus,
      loading,
      error,
    }),
    [error, loading, status]
  );

  return (
    <StatusContext.Provider value={StatusContextState}>
      {children}
    </StatusContext.Provider>
  );
}

export function useStatus() {
  const context = useContext(StatusContext);
  if (context === null) {
    throw new Error("useStatus must be used within a StatusContextProvider");
  }
  return context;
}
