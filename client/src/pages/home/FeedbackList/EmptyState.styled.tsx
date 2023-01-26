import styled from "@emotion/styled";
import { Body1Typography, H1 } from "../../../components/Common.styled";
import { ITheme } from "../../../utils/types";

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

export const EmptyStateTitle = styled(H1)(
  ({ theme: { colors } }: { theme: ITheme }) => ({
    color: colors.americanBlue,
    textAlign: "center",
  })
);

export const EmptyStateContent = styled(Body1Typography)(
  ({ theme: { colors } }: { theme: ITheme }) => ({
    color: colors.darkBlueGray,
    textAlign: "center",

    padding: "1rem 0 4rem 0",
  })
);
