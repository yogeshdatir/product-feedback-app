import React, { useState } from 'react';
import Header from '../../components/Header';
import useMediaQuery from '../../hooks/useMediaQuery';
import Board from './Board';
import StatusTabs from './mobile/StatusTabs';
import { Container } from './Roadmap.styled';

function Roadmap() {
  const isMobileDevice = useMediaQuery('(max-width: 767px)');
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <Container>
      <Header forRoadmap />
      {isMobileDevice && (
        <StatusTabs
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
        />
      )}
      <Board activeTabIndex={activeTabIndex} isMobileDevice={isMobileDevice} />
    </Container>
  );
}

export default Roadmap;
