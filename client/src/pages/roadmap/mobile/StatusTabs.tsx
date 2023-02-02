import styled from '@emotion/styled';
import React, { type Dispatch, type SetStateAction } from 'react';
import { useStatus } from '../../../contexts/StatusContext';
import { TypographyStyles } from '../../../utils/themes';
import { type IStatus } from '../../../utils/types';

export const TabWrapper = styled.div`
  display: flex;
`;

export const Tab = styled.div(
  TypographyStyles.body3,
  ({ theme: { pallette, typography }, isActive }: any) => ({
    flex: 1,
    position: 'relative',
    padding: '1.25rem 0',
    textTransform: 'capitalize',
    fontWeight: typography.fontWeight.bold,
    textAlign: 'center',
    color: pallette.secondary.main,
    borderBottom: '1.5px solid rgba(58, 67, 116, 0.15)',
    cursor: 'pointer',

    '::after': {
      content: isActive ? '" "' : 'none',
      width: '100%',
      height: '0.25rem',
      display: 'block',
      position: 'absolute',
      zIndex: 100,
      bottom: '0',
      left: '0',
      background: pallette.text.dark,
    },
  }),
);

interface Props {
  activeTabIndex: number
  setActiveTabIndex: Dispatch<SetStateAction<number>>
}

function StatusTabs({ activeTabIndex, setActiveTabIndex }: Props) {
  const { status } = useStatus();

  const handleTabSelect = (selectedStatusIndex: number) => {
    setActiveTabIndex(selectedStatusIndex);
  };

  return (
    <TabWrapper>
      {status.map((statusObj: IStatus, index: number) => {
        if (statusObj.name === 'suggestion') return;
        return (
          <Tab
            key={statusObj.name}
            isActive={activeTabIndex === index}
            onClick={() => { handleTabSelect(index); }}
          >
            <span>{statusObj.name}</span>
          </Tab>
        );
      })}
    </TabWrapper>
  );
}

export default StatusTabs;
