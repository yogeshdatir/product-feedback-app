import React from "react";
import { AddFeedbackButton } from "../../../components/Header.styled";
import {
  Container,
  EmptyStateContent,
  EmptyStateTitle,
} from "./EmptyState.styled";
import IllustrationEmpty from "../../../assets/suggestions/illustration-empty.svg";

interface Props {}

const EmptyState = (props: Props) => {
  return (
    <Container>
      <img src={IllustrationEmpty} />
      <EmptyStateTitle>There is no feedback yet.</EmptyStateTitle>
      <EmptyStateContent>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </EmptyStateContent>
      <AddFeedbackButton to="/add">+ Add feedback</AddFeedbackButton>
    </Container>
  );
};

export default EmptyState;
