import React from "react";
import Badge from "../../components/Badge";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import { useCategories } from "../../contexts/CategoryContext";
import {
  CategoryFilterCard,
  CategoryTable,
  SidebarCard,
  Wrapper,
} from "./Sidebar.styled";
import { ICategory } from "../../types";
import { v4 as uuidv4 } from "uuid";

interface Props {}

const Sidebar = (props: Props) => {
  const { filterFeedbackList } = useFeedbacks();
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
      <SidebarCard>
        <CategoryTable>
          <thead>
            <tr>
              <th>Roadmap</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Planned</td>
              <td>1</td>
            </tr>
            <tr>
              <td>In-Progress</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Live</td>
              <td>4</td>
            </tr>
          </tbody>
        </CategoryTable>
      </SidebarCard>
    </Wrapper>
  );
};

export default Sidebar;
