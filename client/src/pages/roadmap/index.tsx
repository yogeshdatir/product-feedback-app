import React from "react";
import Header from "../../components/Header";
import Board from "./Board";
import { Container } from "./Roadmap.styled";

interface Props {}

const Roadmap = (props: Props) => {
  return (
    <Container>
      <Header forRoadmap></Header>
      <Board />
    </Container>
  );
};

export default Roadmap;
