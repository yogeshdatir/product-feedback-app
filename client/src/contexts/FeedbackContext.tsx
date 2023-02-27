import React, {
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useNavigate } from "react-router";
import { getAllFeedbacks, deleteFeedback } from "../services/feedbackAPIs";
import { type IContextProps, type IFeedback } from "../utils/types";

interface IFeedbackContextState {
  // TODO: add types for any
  statusCounts: any;
  feedbackList: IFeedback[];
  removeFeedback: (id: IFeedback["id"]) => Promise<void>;
  updateOrAddToFeedbackList: (
    updatedOrNewFeedback: IFeedback,
    add?: boolean
  ) => void;
  updateRepliesCount: (parentFeedback: IFeedback["id"]) => void;
  categoryToFilter: string;
  filteredFeedbackList: IFeedback[];
  setCategoryToFilter: Dispatch<SetStateAction<string>>;
  loading: boolean;
  error: any;
}

const FeedbackContext = createContext<IFeedbackContextState | null>(null);

export default function FeedbackContextProvider({ children }: IContextProps) {
  const [feedbackList, setFeedbackList] = useState<IFeedback[]>([]);
  const [categoryToFilter, setCategoryToFilter] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [statusCounts, setStatusCounts] = useState({});

  const getStatusCounts = (feedbackListParam: IFeedback[]) => {
    const tempStatusCounts: any = {};
    feedbackListParam.forEach((feedback: IFeedback) => {
      const statusName = feedback.status;
      tempStatusCounts[statusName] = (tempStatusCounts[statusName] || 0) + 1;
    });
    setStatusCounts({ ...tempStatusCounts });
  };
  const fetchFeedbackList = useCallback(async () => {
    try {
      const result = await getAllFeedbacks();
      setFeedbackList(result.data);
      getStatusCounts(result.data);
      setLoading(false);
    } catch (err: any) {
      setError(err);
      console.error(err);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFeedbackList();
  }, [fetchFeedbackList]);

  const removeFeedback = useCallback(
    async (id: IFeedback["id"]) => {
      try {
        await deleteFeedback(id);
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
      } catch (err: any) {
        setError(err);
        console.error(err);
        setLoading(false);
      }
    },
    [navigate]
  );

  const updateOrAddToFeedbackList = useCallback(
    (updatedOrNewFeedback: IFeedback, add: boolean = false) => {
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
    },
    []
  );

  const filterFeedbackList = (category: IFeedback["category"]) => {
    if (!category) return feedbackList;
    const filteredList = feedbackList.filter(
      (feedback: IFeedback) => feedback.category === category && feedback
    );

    return filteredList;
  };

  const filteredFeedbackList: IFeedback[] =
    filterFeedbackList(categoryToFilter);

  // TODO: bug - updating feedbackList calls all the apis on replies page
  const updateRepliesCount = useCallback(
    (parentFeedback: IFeedback["id"]) => {
      const updatedFeedbackList: IFeedback[] = feedbackList.map(
        (feedback: IFeedback) => {
          if (feedback.id === parentFeedback) {
            return { ...feedback, repliesCount: +feedback.repliesCount + 1 };
          }
          return feedback;
        }
      );
      setFeedbackList(updatedFeedbackList);
    },
    [feedbackList]
  );

  const FeedbackContextState = useMemo(
    () => ({
      statusCounts,
      feedbackList,
      removeFeedback,
      updateOrAddToFeedbackList,
      updateRepliesCount,
      categoryToFilter,
      filteredFeedbackList,
      setCategoryToFilter,
      loading,
      error,
    }),
    [
      updateRepliesCount,
      categoryToFilter,
      error,
      feedbackList,
      filteredFeedbackList,
      loading,
      removeFeedback,
      statusCounts,
      updateOrAddToFeedbackList,
    ]
  );

  return (
    <FeedbackContext.Provider value={FeedbackContextState}>
      {children}
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
