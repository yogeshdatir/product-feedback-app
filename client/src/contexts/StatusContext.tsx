import React, { useEffect, createContext, useContext, useState } from "react";
import { getAllStatus } from "../services/statusAPIs";
import { IStatus } from "../utils/types";

// TODO: Add context state type
const StatusContext = createContext<any>(null);

export default function StatusContextProvider(props: any) {
  // TODO: Add status state type
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
