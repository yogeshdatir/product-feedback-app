import React from "react";
import { SidebarCard, Wrapper, ProductName, PageName } from "./Sidebar.styled";
import StatusCard from "./StatusCard";
import DesktopBackgroundHeader from "../../../assets/suggestions/desktop/background-header.png";
import CategoryCard from "./CategoryCard";

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <Wrapper>
      <SidebarCard src={DesktopBackgroundHeader}>
        <ProductName>Frontend Mentor</ProductName>
        <PageName>Feedback Board</PageName>
      </SidebarCard>
      <CategoryCard />
      <StatusCard />
    </Wrapper>
  );
};

export default Sidebar;
