import styled from '@emotion/styled';
import React from 'react';
import CategoryCard from '../CategoryCard';
import StatusCard from '../StatusCard';
import { type ITheme } from '../../../../utils/types';

export const DrawerContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: calc(100vh - 83px);
`;

export const Content = styled.div(
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    background: pallette.grey.light,
    width: '72%',
    height: '100%',
    marginLeft: 'auto',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  }),
);

function Drawer() {
  return (
    <DrawerContainer>
      <Content>
        <CategoryCard />
        <StatusCard />
      </Content>
    </DrawerContainer>
  );
}

export default Drawer;
