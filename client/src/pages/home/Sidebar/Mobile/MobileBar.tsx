import React, { useState } from "react";
import { PageName, ProductName } from "../Sidebar.styled";
import MobileBackgroundHeader from "../../../../assets/suggestions/mobile/background-header.png";
import styled from "@emotion/styled";
import { ITheme } from "../../../../utils/types";
import { ReactComponent as HamburgerIcon } from "../../../../assets/shared/mobile/icon-hamburger.svg";
import Drawer from "./Drawer";

const MobileBarBackground = styled.div(({ theme: { colors }, src }: any) => ({
  position: "fixed",
  width: "100%",
  padding: "1rem 1.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  background: src ? `url(${src})` : "#fff",
  svg: {
    ":hover": {
      cursor: "pointer",
    },
  },
}));

export const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
});

export const MobileProductName = styled(ProductName)(
  ({ theme: { colors } }: { theme: ITheme }) => ({
    padding: 0,
    color: colors.white,
  })
);

interface Props {}

const MobileBar = (props: Props) => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  return (
    <>
      <MobileBarBackground src={MobileBackgroundHeader}>
        <Wrapper>
          <MobileProductName>Frontend Mentor</MobileProductName>
          <PageName>Feedback Board</PageName>
        </Wrapper>
        <HamburgerIcon
          onClick={() => setShowDrawer((prevState: boolean) => !prevState)}
        />
        {showDrawer && <Drawer />}
      </MobileBarBackground>
    </>
  );
};

export default MobileBar;
