import React from "react";
import Header from "../../components/Header";
import useMediaQuery from "../../hooks/useMediaQuery";
import FeedbackList from "./FeedbackList";
import { Container, ContentWrapper } from "./Home.styled";
import Sidebar from "./Sidebar";
import MobileBar from "./Sidebar/Mobile/MobileBar";

interface Props {}

const Home = (props: Props) => {
  const isMobileDevice = useMediaQuery("(max-width: 767px)");

  return (
    <Container>
      {isMobileDevice ? <MobileBar /> : <Sidebar />}
      <ContentWrapper>
        <Header />
        <FeedbackList />
      </ContentWrapper>
    </Container>
  );
};

export default Home;
