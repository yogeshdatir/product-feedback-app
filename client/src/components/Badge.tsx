import React, { ReactNode } from "react";
import { Container } from "./Badge.styled";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Badge = ({ children, ...divAttributes }: Props) => {
  return <Container {...divAttributes}>{children}</Container>;
};

export default Badge;
