import styled from "@emotion/styled";
import { IStatus, ITheme } from "../../../utils/types";
import DesktopBackgroundHeader from "../../../assets/suggestions/desktop/background-header.png";

export const Wrapper = styled.div`
  width: 16rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 1.5rem 0;
  position: sticky;
  top: 4rem;
`;

export const SidebarCard = styled.div<any>`
  width: 100%;
  padding: 1.5rem;

  display: flex;
  flex-wrap: wrap;
  background: ${({ src }) => (src ? `url(${src})` : "#fff")};
  border-radius: 10px;
`;

export const ProductName = styled.h2(
  ({ theme: { colors, typography } }: { theme: ITheme }) => ({
    paddingTop: "2.5rem",

    color: colors.white,
    fontSize: typography.h2.fontSize,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.h2.lineHeight,
    letterSpacing: typography.h2.letterSpacing,
  })
);

export const PageName = styled.span(
  ({ theme: { colors, typography } }: { theme: ITheme }) => ({
    color: colors.white,
    mixBlendMode: "normal",
    fontSize: typography.body2.fontSize,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.body2.lineHeight,
  })
);

export const CategoryFilterCard = styled(SidebarCard)`
  gap: 14px 8px;
`;

export const StatusTable = styled.div`
  width: 100%;
`;

export const Title = styled.h3(
  ({ theme: { colors, typography } }: { theme: ITheme }) => ({
    color: colors.americanBlue,
    fontSize: typography.h3.fontSize,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.h3.lineHeight,
    letterSpacing: typography.h3.letterSpacing,
  })
);

export const ViewButton = styled.button(
  ({ theme: { colors, typography } }: { theme: ITheme }) => ({
    fontWeight: typography.fontWeight.semiBold,
    fontSize: typography.body3.fontSize,
    lineHeight: typography.body3.lineHeight,
    textDecorationLine: "underline",
    color: colors.royalBlue,
    mixBlendMode: "normal",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    marginLeft: "auto",

    ":hover": {
      color: colors.lightCobaltBlue,
    },
  })
);

export const StatusTableBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StatusTableRow = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
`;

export const StatusTableHeaderRow = styled(StatusTableRow)`
  padding-bottom: 1rem;
`;

export const StatusDot = styled.div<any>`
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${({ theme, name }) => theme.colors[name]};
`;

export const StatusName = styled.span(
  ({ theme: { colors, typography } }: { theme: ITheme }) => ({
    padding: "0 1rem",
    fontWeight: typography.fontWeight.regular,
    fontSize: typography.body1.fontSize,
    lineHeight: typography.body1.lineHeight,
    color: colors.darkBlueGray,
  })
);

export const FeedbackCount = styled.span(
  ({ theme: { colors, typography } }: { theme: ITheme }) => ({
    marginLeft: "auto",
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.body1.fontSize,
    lineHeight: typography.body1.lineHeight,
    color: colors.darkBlueGray,
  })
);
