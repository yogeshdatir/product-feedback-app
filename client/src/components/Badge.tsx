import React, { ReactNode } from "react";
import { Container } from "./Badge.styled";

interface Props {
  children: ReactNode;
}

const Badge = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Badge;
