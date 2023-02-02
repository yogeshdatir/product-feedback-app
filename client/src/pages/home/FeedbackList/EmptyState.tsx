import React from 'react';
import { useNavigate } from 'react-router';
import {
  Container,
  EmptyStateContent,
  EmptyStateTitle,
} from './EmptyState.styled';
import IllustrationEmpty from '../../../assets/suggestions/illustration-empty.svg';
import Button from '../../../components/Button';

function EmptyState() {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={IllustrationEmpty} />
      <EmptyStateTitle>There is no feedback yet.</EmptyStateTitle>
      <EmptyStateContent>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </EmptyStateContent>
      <Button
        backgroundColor="primary"
        color="buttonPrimary"
        onClick={() => {
          navigate('/add');
        }}
      >
        + Add Feedback
      </Button>
    </Container>
  );
}

export default EmptyState;
