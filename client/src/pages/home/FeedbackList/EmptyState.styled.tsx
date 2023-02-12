import styled from "@emotion/styled";
import { TypographyStyles } from "../../../utils/themes";
import { type ITheme } from "../../../utils/types";

export const Container = styled.div`
  padding-top: 7rem;
  margin: 0 auto;
  max-width: 26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    padding-bottom: 3.25rem;
  }
`;

export const EmptyStateTitle = styled("h1")(
  TypographyStyles.h1,
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    color: pallette.secondary.dark,
    textAlign: "center",
  })
);

export const EmptyStateContent = styled("p")(
  TypographyStyles.body1,
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    color: pallette.text.light,
    textAlign: "center",

    padding: "1rem 0 4rem 0",
  })
);
