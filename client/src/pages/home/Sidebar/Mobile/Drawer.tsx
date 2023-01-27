import styled from "@emotion/styled";
import React from "react";
import CategoryCard from "../CategoryCard";
import StatusCard from "../StatusCard";

export const DrawerContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: calc(100vh - 83px);
`;

export const Content = styled.div`
  background: #f7f8fd;
  width: 72%;
  height: 100%;
  margin-left: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

interface Props {}

const Drawer = (props: Props) => {
  return (
    <DrawerContainer>
      <Content>
        <CategoryCard />
        <StatusCard />
      </Content>
    </DrawerContainer>
  );
};

export default Drawer;
