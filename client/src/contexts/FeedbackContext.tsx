import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllFeedbacks } from "../services/apis";

const FeedbackContext = createContext<any>(null);

export default function FeedbackContextProvider(props: any) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFeedbackList = async () => {
    try {
      const result = await getAllFeedbacks();
      setFeedbackList(result.data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbackList();
  }, []);

  const FeedbackContextState = {
    feedbackList,
    setFeedbackList,
    loading,
    error,
  };

  return (
    <FeedbackContext.Provider value={FeedbackContextState}>
      {props.children}
    </FeedbackContext.Provider>
  );
}

export function useFeedbacks() {
  const context = useContext(FeedbackContext);
  if (context === null) {
    throw new Error(
      "useFeedbacks must be used within a FeedbackContextProvider"
    );
  }
  return context;
}
