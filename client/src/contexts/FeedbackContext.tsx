import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  getAllFeedbacks,
  deleteFeedback,
  updateFeedback,
} from "../services/feedbackAPIs";
import { IFeedback } from "../types";

// TODO: Add context state type
const FeedbackContext = createContext<any>(null);

export default function FeedbackContextProvider(props: any) {
  const [feedbackList, setFeedbackList] = useState<IFeedback[]>([]);
  const [categoryToFilter, setCategoryToFilter] = useState<string>("");
  const [filteredFeedbackList, setFilteredFeedbackList] = useState<IFeedback[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const removeFeedback = async (id: IFeedback["id"]) => {
    try {
      const result = await deleteFeedback(id);
      setFeedbackList((prevFeedbackList: IFeedback[]) => {
        return [
          ...prevFeedbackList.filter(
            (feedback: IFeedback) => feedback.id !== id
          ),
        ];
      });
      setLoading(false);
      navigate("/");
    } catch (error: any) {
      setError(error);
      console.error(error);
      setLoading(false);
    }
  };

  const updateOrAddToFeedbackList = (
    updatedOrNewFeedback: IFeedback,
    add: boolean = false
  ) => {
    if (add) {
      setFeedbackList((prevFeedbackList: IFeedback[]) => {
        return [...prevFeedbackList, updatedOrNewFeedback];
      });
      return;
    }
    setFeedbackList((prevFeedbackList: IFeedback[]) => {
      return [
        ...prevFeedbackList.map((feedback: IFeedback) =>
          feedback.id === updatedOrNewFeedback.id
            ? updatedOrNewFeedback
            : feedback
        ),
      ];
    });
  };

  const filterFeedbackList = (category: IFeedback["category"]) => {
    setCategoryToFilter(category);
    if (!category) return feedbackList;
    const filteredList = feedbackList.filter((feedback: IFeedback) => {
      if (feedback.category === category) return feedback;
    });

    setFilteredFeedbackList(filteredList);
  };

  const FeedbackContextState = {
    feedbackList,
    removeFeedback,
    updateOrAddToFeedbackList,
    categoryToFilter,
    filteredFeedbackList,
    filterFeedbackList,
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
