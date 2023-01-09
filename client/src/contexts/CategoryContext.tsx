import React, { useEffect, createContext, useContext, useState } from "react";
import { getAllCategories } from "../services/categoryAPIs";
import { ICategory } from "../types";

// TODO: Add context state type
const CategoryContext = createContext<any>(null);

export default function CategoryContextProvider(props: any) {
  // TODO: Add category state type
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      const result = await getAllCategories();
      setCategories(result.data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const CategoryContextState = {
    categories,
    setCategories,
  };

  return (
    <CategoryContext.Provider value={CategoryContextState}>
      {props.children}
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
