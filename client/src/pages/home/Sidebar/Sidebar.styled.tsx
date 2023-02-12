import styled from "@emotion/styled";
import { type ITheme } from "../../../utils/types";
import { mq, TypographyStyles } from "../../../utils/themes";

export const Wrapper = styled.div(
  {
    height: "max-content",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
  },
  mq({
    flexDirection: ["column", "column", "row", "column"],
    flex: [1, 1, 1, 1],
    gap: ["10px", "10px", "10px", "1.5rem 0"],
    position: ["relative", "relative", "relative", "sticky"],
    top: ["0", "0", "0", "4rem"],
  })
);

export const SidebarCard = styled.div(
  ({ theme: { pallette }, src }: any) => ({
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    borderRadius: "10px",
    background: src ? `url(${src})` : pallette.common.white,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }),
  mq({
    padding: ["1.1rem", "1.1rem", "1.2rem", "1.5rem"],
  })
);

export const ProductWrapper = styled.div`
  margin-top: auto;
`;

export const ProductName = styled("h2")(
  TypographyStyles.h2,
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    paddingTop: "2.4rem",
    color: pallette.common.white,
  })
);

export const PageName = styled("p")(
  TypographyStyles.body2,
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    color: pallette.common.white,
    mixBlendMode: "normal",
  })
);

export const CategoryFilterCard = styled(SidebarCard)`
  gap: 14px 8px;
`;

export const StatusTable = styled.div`
  width: 100%;
`;

export const Title = styled("h3")(
  TypographyStyles.h3,
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    color: pallette.secondary.dark,
  })
);

export const ViewButton = styled.button(
  TypographyStyles.body3,
  ({ theme: { pallette, typography } }: { theme: ITheme }) => ({
    fontWeight: typography.fontWeight.semiBold,
    textDecorationLine: "underline",
    color: pallette.info.main,
    mixBlendMode: "normal",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    marginLeft: "auto",

    ":hover": {
      color: "#8397F8",
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
  padding-bottom: 1.5rem;
`;

export const StatusName = styled("p")(
  TypographyStyles.body1,
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    padding: "0 1rem",
    color: pallette.text.light,
  })
);

export const FeedbackCount = styled("p")(
  TypographyStyles.body1,
  ({ theme: { pallette, typography } }: { theme: ITheme }) => ({
    marginLeft: "auto",
    fontWeight: typography.fontWeight.bold,
    color: pallette.text.light,
  })
);
