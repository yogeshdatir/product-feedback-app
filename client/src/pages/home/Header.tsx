import React from "react";
import { AddFeedbackButton, Wrapper } from "./Header.styled";
import { Outlet, Link } from "react-router-dom";

interface Props {}

const Header = (props: Props) => {
  return (
    <Wrapper>
      <h3>6 Suggestions</h3>
      <AddFeedbackButton>
        <Link to="/add">Add feedback</Link>
      </AddFeedbackButton>
    </Wrapper>
  );
};

export default Header;
