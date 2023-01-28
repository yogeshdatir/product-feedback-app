import styled from "@emotion/styled";
import React from "react";
import { useFeedbacks } from "../../../contexts/FeedbackContext";
import { useStatus } from "../../../contexts/StatusContext";
import { IStatus } from "../../../utils/types";

export const TabWrapper = styled.div`
  display: flex;
`;

export const Tab = styled.div(({ isActive }: any) => ({
  flex: 1,
  position: "relative",
  padding: "1.25rem 0",
  textTransform: "capitalize",
  fontWeight: 700,
  fontSize: "13px",
  lineHeight: "19px",
  textAlign: "center",
  letterSpacing: "-0.180556px",
  color: "#3a4374",
  borderBottom: "1.5px solid rgba(58, 67, 116, 0.15)",
  cursor: "pointer",

  "::after": {
    content: isActive ? '" "' : "none",
    width: "100%",
    height: "0.25rem",
    display: "block",
    position: "absolute",
    zIndex: 100,
    bottom: "0",
    left: "0",
    background: "#AD1FEA",
  },
}));

interface Props {
  activeTabIndex: number;
  setActiveTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

const StatusTabs = ({ activeTabIndex, setActiveTabIndex }: Props) => {
  const { feedbackList } = useFeedbacks();
  const { status } = useStatus();

  const handleTabSelect = (selectedStatusIndex: number) => {
    setActiveTabIndex(selectedStatusIndex);
  };

  return (
    <TabWrapper>
      {status.map((statusObj: IStatus, index: number) => {
        if (statusObj.name === "suggestion") return;
        return (
          <Tab
            key={statusObj.name}
            isActive={activeTabIndex === index}
            onClick={() => handleTabSelect(index)}
          >
            <span>{statusObj.name}</span>
          </Tab>
        );
      })}
    </TabWrapper>
  );
};

export default StatusTabs;
