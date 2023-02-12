import React, {
  useEffect,
  createContext,
  useContext,
  useState,
  useMemo,
} from "react";
import { getAllCategories } from "../services/categoryAPIs";
import { type ICategory, type IContextProps } from "../utils/types";

interface ICategoryContextState {
  categories: ICategory[];
  setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
  loading: boolean;
  error: any;
}

const CategoryContext = createContext<ICategoryContextState | null>(null);

// TODO: Research about this eslit rule: The 'CategoryContextState' object (at line 35) passed as the value prop to the Context provider (at line 43) changes every render. To fix this consider wrapping it in a useMemo hook.eslintreact/jsx-no-constructed-context-values)

export default function CategoryContextProvider({ children }: IContextProps) {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      const result = await getAllCategories();
      setCategories(result.data);
      setLoading(false);
    } catch (err: any) {
      setError(err);
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const CategoryContextState = useMemo(
    () => ({
      categories,
      setCategories,
      loading,
      error,
    }),
    [categories, error, loading]
  );

  return (
    <CategoryContext.Provider value={CategoryContextState}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoryContext);
  if (context === null) {
    throw new Error(
      "useCategory must be used within a CategoryContextProvider"
    );
  }
  return context;
}
