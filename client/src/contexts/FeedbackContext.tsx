import React, {
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router';
import { getAllFeedbacks, deleteFeedback } from '../services/feedbackAPIs';
import { type IContextProps, type IFeedback } from '../utils/types';

interface IFeedbackContextState {
  // TODO: add types for any
  statusCounts: any
  feedbackList: IFeedback[]
  removeFeedback: (id: IFeedback['id']) => Promise<void>
  updateOrAddToFeedbackList: (
    updatedOrNewFeedback: IFeedback,
    add?: boolean
  ) => void
  categoryToFilter: string
  filteredFeedbackList: IFeedback[]
  setCategoryToFilter: Dispatch<SetStateAction<string>>
  loading: boolean
  error: any
}

const FeedbackContext = createContext<IFeedbackContextState | null>(null);

export default function FeedbackContextProvider(props: IContextProps) {
  const [feedbackList, setFeedbackList] = useState<IFeedback[]>([]);
  const [categoryToFilter, setCategoryToFilter] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
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
    const tempStatusCounts: any = {};
    feedbackList.forEach((feedback: IFeedback) => {
      const statusName = feedback.status;
      tempStatusCounts[statusName] = (tempStatusCounts[statusName] || 0) + 1;
    });
    setStatusCounts({ ...tempStatusCounts });
  };

  useEffect(() => {
    fetchFeedbackList();
  }, []);

  const removeFeedback = async (id: IFeedback['id']) => {
    try {
      const result = await deleteFeedback(id);
      let updatedFeedbackList: IFeedback[] = [];
      setFeedbackList((prevFeedbackList: IFeedback[]) => {
        updatedFeedbackList = [
          ...prevFeedbackList.filter(
            (feedback: IFeedback) => feedback.id !== id,
          ),
        ];
        return updatedFeedbackList;
      });
      getStatusCounts(updatedFeedbackList);
      setLoading(false);
      navigate('/');
    } catch (error: any) {
      setError(error);
      console.error(error);
      setLoading(false);
    }
  };

  const updateOrAddToFeedbackList = (
    updatedOrNewFeedback: IFeedback,
    add: boolean = false,
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
        ...prevFeedbackList.map((feedback: IFeedback) => (feedback.id === updatedOrNewFeedback.id
          ? updatedOrNewFeedback
          : feedback)),
      ];
      getStatusCounts(updatedFeedbackList);
      return updatedFeedbackList;
    });
  };

  const filterFeedbackList = (category: IFeedback['category']) => {
    if (!category) return feedbackList;
    const filteredList = feedbackList.filter((feedback: IFeedback) => {
      if (feedback.category === category) return feedback;
    });

    return filteredList;
  };

  const filteredFeedbackList: IFeedback[] = filterFeedbackList(categoryToFilter);

  const FeedbackContextState = {
    statusCounts,
    feedbackList,
    removeFeedback,
    updateOrAddToFeedbackList,
    categoryToFilter,
    filteredFeedbackList,
    setCategoryToFilter,
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
      'useFeedbacks must be used within a FeedbackContextProvider',
    );
  }
  return context;
}
