import React from "react";
import Badge from "../../components/Badge";
import {
  CategoryFilterCard,
  CategoryTable,
  SidebarCard,
  Wrapper,
} from "./Sidebar.styled";

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <Wrapper>
      <SidebarCard>
        <span>Frontend Mentor</span>
        <span>Feedback Board</span>
      </SidebarCard>
      <CategoryFilterCard>
        <Badge>All</Badge>
        <Badge>UI</Badge>
        <Badge>UX</Badge>
        <Badge>Enhancement</Badge>
        <Badge>Feature</Badge>
        <Badge>Bug</Badge>
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
