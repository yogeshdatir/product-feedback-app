import React from "react";
import FeedbackList from "./FeedbackList";
import Header from "./Header";
import { Container, ContentWrapper } from "./Home.styled";
import Sidebar from "./Sidebar";

interface Props {}

const Home = (props: Props) => {
  return (
    <Container>
      <Sidebar />
      <ContentWrapper>
        <Header />
        <FeedbackList />
      </ContentWrapper>
    </Container>
  );
};

export default Home;
