import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ITheme } from "../../utils/types";

interface Props {
  feedbackId: string | undefined;
}

export const StyledEditButton = styled.button(
  ({ theme: { colors, typography } }: { theme: ITheme }) => ({
    cursor: "pointer",
    padding: "12px 24px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: colors.royalBlue,
    fontSize: typography.h4.fontSize,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.h4.lineHeight,
    letterSpacing: typography.h4.letterSpacing,
    color: colors.aliceBlue,

    ":hover": {
      backgroundColor: colors.royalBlueHovered,
    },
  })
);

const EditButton = ({ feedbackId }: Props) => {
  const navigate = useNavigate();
  const redirectToEditFeedback = (feedbackId: string | undefined) => {
    if (feedbackId) navigate(`/edit/${feedbackId}`);
  };

  return (
    <StyledEditButton onClick={() => redirectToEditFeedback(feedbackId)}>
      Edit Feedback
    </StyledEditButton>
  );
};

export default EditButton;
