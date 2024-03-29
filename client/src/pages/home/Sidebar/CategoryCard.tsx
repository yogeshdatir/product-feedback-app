import React from "react";
import { v4 as uuidv4 } from "uuid";
import Badge from "../../../components/Badge";
import { useCategories } from "../../../contexts/CategoryContext";
import { useFeedbacks } from "../../../contexts/FeedbackContext";
import { type ICategory } from "../../../utils/types";
import { CategoryFilterCard } from "./Sidebar.styled";

function CategoryCard() {
  const { categoryToFilter, setCategoryToFilter } = useFeedbacks();
  const { categories } = useCategories();

  return (
    <CategoryFilterCard>
      <Badge
        isActive={categoryToFilter === ""}
        onClick={() => {
          setCategoryToFilter("");
        }}
      >
        All
      </Badge>
      {categories.map((category: ICategory) => (
        <Badge
          isActive={category.name === categoryToFilter}
          key={uuidv4()}
          onClick={() => {
            setCategoryToFilter(category.name);
          }}
        >
          {category.name}
        </Badge>
      ))}
    </CategoryFilterCard>
  );
}

export default CategoryCard;
