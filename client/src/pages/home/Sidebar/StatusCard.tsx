import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import {
  FeedbackCount,
  SidebarCard,
  StatusTable,
  StatusTableBody,
  StatusTableRow,
  Title,
  ViewButton,
  StatusTableHeaderRow,
  StatusName,
} from "./Sidebar.styled";
import { useFeedbacks } from "../../../contexts/FeedbackContext";
import { type IStatus } from "../../../utils/types";
import { useStatus } from "../../../contexts/StatusContext";
import { StatusDot } from "../../../components/Common.styled";

function StatusCard() {
  const { statusCounts } = useFeedbacks();
  const { status } = useStatus();
  const navigate = useNavigate();

  const redirectToRoadmap = () => {
    navigate("roadmap");
  };

  return (
    <SidebarCard>
      <StatusTable>
        <StatusTableHeaderRow>
          <Title>Roadmap</Title>
          <ViewButton onClick={redirectToRoadmap}>View</ViewButton>
        </StatusTableHeaderRow>
        <StatusTableBody>
          {status.map(({ name }: IStatus) => {
            if (name === "suggestion") return null;
            return (
              <StatusTableRow key={uuidv4()}>
                <StatusDot name={name} />
                <StatusName>{name}</StatusName>
                <FeedbackCount>{statusCounts[name] || 0}</FeedbackCount>
              </StatusTableRow>
            );
          })}
        </StatusTableBody>
      </StatusTable>
    </SidebarCard>
  );
}

export default StatusCard;
