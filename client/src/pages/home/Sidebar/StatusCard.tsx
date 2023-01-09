import React from "react";
import { SidebarCard, StatusTable } from "./Sidebar.styled";
import { useFeedbacks } from "../../../contexts/FeedbackContext";
import { IFeedback, IStatus } from "../../../types";
import { v4 as uuidv4 } from "uuid";
import { useStatus } from "../../../contexts/StatusContext";

interface Props {}

const StatusCard = (props: Props) => {
  const { statusCounts } = useFeedbacks();
  const { status } = useStatus();

  return (
    <SidebarCard>
      <StatusTable>
        <thead>
          <tr>
            <th>Roadmap</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {status.map(({ name }: IStatus) => {
            return (
              <tr key={uuidv4()}>
                <td>{name}</td>
                <td>{statusCounts[name] || 0}</td>
              </tr>
            );
          })}
        </tbody>
      </StatusTable>
    </SidebarCard>
  );
};

export default StatusCard;
