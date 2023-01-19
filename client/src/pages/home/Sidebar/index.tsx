import React from "react";
import Badge from "../../../components/Badge";
import { useFeedbacks } from "../../../contexts/FeedbackContext";
import { useCategories } from "../../../contexts/CategoryContext";
import {
  CategoryFilterCard,
  StatusTable,
  SidebarCard,
  Wrapper,
  ProductName,
  PageName,
} from "./Sidebar.styled";
import { ICategory, IFeedback } from "../../../utils/types";
import { v4 as uuidv4 } from "uuid";
import StatusCard from "./StatusCard";
import DesktopBackgroundHeader from "../../../assets/suggestions/desktop/background-header.png";

interface Props {}

const Sidebar = (props: Props) => {
  const { filterFeedbackList, categoryToFilter } = useFeedbacks();
  const { categories } = useCategories();

  return (
    <Wrapper>
      <SidebarCard src={DesktopBackgroundHeader}>
        <ProductName>Frontend Mentor</ProductName>
        <PageName>Feedback Board</PageName>
      </SidebarCard>
      <CategoryFilterCard>
        <Badge
          isActive={categoryToFilter === ""}
          onClick={() => {
            filterFeedbackList("");
          }}
        >
          All
        </Badge>
        {categories.map((category: ICategory) => {
          return (
            <Badge
              isActive={category.name === categoryToFilter}
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
