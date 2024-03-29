import React, { useState } from "react";
import styled from "@emotion/styled";
import { PageName, ProductName } from "../Sidebar.styled";
import MobileBackgroundHeader from "../../../../assets/suggestions/mobile/background-header.png";
import { type ITheme } from "../../../../utils/types";
import HamburgerIcon from "../../../../assets/shared/mobile/icon-hamburger.svg";
import CloseIcon from "../../../../assets/shared/mobile/icon-close.svg";
import Drawer from "./Drawer";

const MobileBarBackground = styled.div(({ theme: { pallette }, src }: any) => ({
  position: "fixed",
  width: "100%",
  padding: "1rem 1.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  background: src ? `url(${src})` : pallette.common.white,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  img: {
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
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    padding: 0,
    color: pallette.common.white,
  })
);

function MobileBar() {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  return (
    <MobileBarBackground src={MobileBackgroundHeader}>
      <Wrapper>
        <MobileProductName>Frontend Mentor</MobileProductName>
        <PageName>Feedback Board</PageName>
      </Wrapper>
      <button
        type="button"
        style={{ background: "transparent", border: "none" }}
        onClick={() => {
          setShowDrawer((prevState: boolean) => !prevState);
        }}
      >
        <img
          alt="drawer toggle button"
          src={showDrawer ? CloseIcon : HamburgerIcon}
        />
      </button>
      {showDrawer && <Drawer />}
    </MobileBarBackground>
  );
}

export default MobileBar;
