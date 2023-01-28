import React, { useState } from "react";
import Header from "../../components/Header";
import { useStatus } from "../../contexts/StatusContext";
import useMediaQuery from "../../hooks/useMediaQuery";
import Board from "./Board";
import StatusTabs from "./mobile/StatusTabs";
import { Container } from "./Roadmap.styled";

interface Props {}

const Roadmap = (props: Props) => {
  const isMobileDevice = useMediaQuery("(max-width: 767px)");
  const { status } = useStatus();
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <Container>
      <Header forRoadmap></Header>
      {isMobileDevice && (
        <StatusTabs
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
        />
      )}
      <Board activeTabIndex={activeTabIndex} isMobileDevice={isMobileDevice} />
    </Container>
  );
};

export default Roadmap;
