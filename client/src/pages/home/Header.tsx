import React from "react";
import { AddFeedbackButton, Wrapper } from "./Header.styled";

interface Props {}

const Header = (props: Props) => {
  return (
    <Wrapper>
      <h3>6 Suggestions</h3>
      <AddFeedbackButton>Add feedback</AddFeedbackButton>
    </Wrapper>
  );
};

export default Header;
