import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TypographyStyles } from '../../utils/themes';
import { type ITheme } from '../../utils/types';

interface Props {
  feedbackId: string | undefined
}

export const StyledEditButton = styled.button(
  TypographyStyles.h4,
  ({ theme: { pallette, typography } }: { theme: ITheme }) => ({
    cursor: 'pointer',
    padding: '12px 24px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: pallette.info.main,
    fontWeight: typography.fontWeight.bold,
    color: pallette.grey.main,

    ':hover': {
      backgroundColor: pallette.info.light,
    },
  }),
);

function EditButton({ feedbackId }: Props) {
  const navigate = useNavigate();
  const redirectToEditFeedback = (feedbackId: string | undefined) => {
    if (feedbackId) navigate(`/edit/${feedbackId}`);
  };

  return (
    <StyledEditButton onClick={() => { redirectToEditFeedback(feedbackId); }}>
      Edit Feedback
    </StyledEditButton>
  );
}

export default EditButton;
