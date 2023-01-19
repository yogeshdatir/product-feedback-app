import React, { useEffect, createContext, useContext, useState } from "react";
import { getAllStatus } from "../services/statusAPIs";
import { IStatus } from "../utils/types";

interface IStatusContextState {
  status: IStatus[];
  setStatus: React.Dispatch<React.SetStateAction<IStatus[]>>;
  loading: boolean;
  error: null;
}

const StatusContext = createContext<IStatusContextState | null>(null);

export default function StatusContextProvider(props: any) {
  const [status, setStatus] = useState<IStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStatus = async () => {
    try {
      const result = await getAllStatus();
      setStatus(result.data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const StatusContextState = {
    status,
    setStatus,
    loading,
    error,
  };

  return (
    <StatusContext.Provider value={StatusContextState}>
      {props.children}
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
