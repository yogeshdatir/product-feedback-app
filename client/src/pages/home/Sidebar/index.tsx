import React from "react";
import {
  SidebarCard,
  Wrapper,
  ProductName,
  PageName,
  ProductWrapper,
} from "./Sidebar.styled";
import StatusCard from "./StatusCard";
import DesktopBackgroundHeader from "../../../assets/suggestions/desktop/background-header.png";
import TabletBackgroundHeader from "../../../assets/suggestions/tablet/background-header.png";
import CategoryCard from "./CategoryCard";
import useMediaQuery from "../../../hooks/useMediaQuery";

const Sidebar = () => {
  const isTabletDevice = useMediaQuery(
    "(min-width: 767px) and (max-width: 1109px)"
  );

  return (
    <Wrapper>
      <SidebarCard
        src={isTabletDevice ? TabletBackgroundHeader : DesktopBackgroundHeader}
      >
        <ProductWrapper style={{ marginTop: "auto" }}>
          <ProductName>Frontend Mentor</ProductName>
          <PageName>Feedback Board</PageName>
        </ProductWrapper>
      </SidebarCard>
      <CategoryCard />
      <StatusCard />
    </Wrapper>
  );
};

export default Sidebar;
