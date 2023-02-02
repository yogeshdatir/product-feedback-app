import React, { type ReactNode } from 'react';
import { Container } from './Badge.styled';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  isActive?: boolean
  children: ReactNode
}

function Badge({ children, isActive = false, ...spanAttributes }: Props) {
  return (
    <Container isActive={isActive} {...spanAttributes}>
      {children}
    </Container>
  );
}

export default Badge;
