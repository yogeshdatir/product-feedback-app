import styled from "@emotion/styled";
import { ITheme } from "../../../utils/types";
import {
  Body1Typography,
  Body2Typography,
  H2,
  H3,
} from "../../../components/Common.styled";

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

export const ProductName = styled(H2)(
  ({ theme: { colors } }: { theme: ITheme }) => ({
    paddingTop: "2.5rem",

    color: colors.white,
  })
);

export const PageName = styled(Body2Typography)(
  ({ theme: { colors } }: { theme: ITheme }) => ({
    color: colors.white,
    mixBlendMode: "normal",
  })
);

export const CategoryFilterCard = styled(SidebarCard)`
  gap: 14px 8px;
`;

export const StatusTable = styled.div`
  width: 100%;
`;

export const Title = styled(H3)(({ theme: { colors } }: { theme: ITheme }) => ({
  color: colors.americanBlue,
}));

// TODO: reuse Body3Typography
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

export const StatusName = styled(Body1Typography)(
  ({ theme: { colors, typography } }: { theme: ITheme }) => ({
    padding: "0 1rem",
    color: colors.darkBlueGray,
  })
);

export const FeedbackCount = styled(Body1Typography)(
  ({ theme: { colors, typography } }: { theme: ITheme }) => ({
    marginLeft: "auto",
    fontWeight: typography.fontWeight.bold,
    color: colors.darkBlueGray,
  })
);
