import React from "react";
import Badge from "../../../components/Badge";
import { useFeedbacks } from "../../../contexts/FeedbackContext";
import { useCategories } from "../../../contexts/CategoryContext";
import {
  CategoryFilterCard,
  StatusTable,
  SidebarCard,
  Wrapper,
} from "./Sidebar.styled";
import { ICategory, IFeedback } from "../../../utils/types";
import { v4 as uuidv4 } from "uuid";
import StatusCard from "./StatusCard";

interface Props {}

const Sidebar = (props: Props) => {
  const { statusCounts, filterFeedbackList } = useFeedbacks();
  const { categories } = useCategories();

  return (
    <Wrapper>
      <SidebarCard>
        <span>Frontend Mentor</span>
        <span>Feedback Board</span>
      </SidebarCard>
      <CategoryFilterCard>
        <Badge
          onClick={() => {
            filterFeedbackList("");
          }}
        >
          All
        </Badge>
        {categories.map((category: ICategory) => {
          return (
            <Badge
              key={uuidv4()}
              onClick={() => {
                filterFeedbackList(category.name);
              }}
            >
              {category.name}
            </Badge>
          );
        })}
      </CategoryFilterCard>
      <StatusCard />
    </Wrapper>
  );
};

export default Sidebar;
