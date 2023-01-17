import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  getAllFeedbacks,
  deleteFeedback,
  updateFeedback,
} from "../services/feedbackAPIs";
import { IFeedback } from "../utils/types";

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
  // let statusCounts = {};
  const [statusCounts, setStatusCounts] = useState({});

  const fetchFeedbackList = async () => {
    try {
      const result = await getAllFeedbacks();
      setFeedbackList(result.data);
      getStatusCounts(result.data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      console.error(error);
      setLoading(false);
    }
  };

  const getStatusCounts = (feedbackList: IFeedback[]) => {
    let tempStatusCounts: any = {};
    feedbackList.forEach((feedback: IFeedback) => {
      const statusName = feedback.status;
      tempStatusCounts[statusName] = (tempStatusCounts[statusName] || 0) + 1;
    });
    setStatusCounts({ ...tempStatusCounts });
  };

  useEffect(() => {
    fetchFeedbackList();
  }, []);

  const removeFeedback = async (id: IFeedback["id"]) => {
    try {
      const result = await deleteFeedback(id);
      let updatedFeedbackList: IFeedback[] = [];
      setFeedbackList((prevFeedbackList: IFeedback[]) => {
        updatedFeedbackList = [
          ...prevFeedbackList.filter(
            (feedback: IFeedback) => feedback.id !== id
          ),
        ];
        return updatedFeedbackList;
      });
      getStatusCounts(updatedFeedbackList);
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
    let updatedFeedbackList: IFeedback[] = [];
    if (add) {
      setFeedbackList((prevFeedbackList: IFeedback[]) => {
        updatedFeedbackList = [...prevFeedbackList, updatedOrNewFeedback];
        return updatedFeedbackList;
      });
      getStatusCounts(updatedFeedbackList);
      return;
    }
    setFeedbackList((prevFeedbackList: IFeedback[]) => {
      updatedFeedbackList = [
        ...prevFeedbackList.map((feedback: IFeedback) =>
          feedback.id === updatedOrNewFeedback.id
            ? updatedOrNewFeedback
            : feedback
        ),
      ];
      getStatusCounts(updatedFeedbackList);
      return updatedFeedbackList;
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
    statusCounts,
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
