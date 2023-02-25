import styled from "@emotion/styled";
import { mq, TypographyStyles } from "../../utils/themes";
import { ViewButton } from "../home/Sidebar/Sidebar.styled";

export const Container = styled.div(
  {
    margin: "auto",
  },
  mq({
    width: ["100%", "100%", "689px", "730px"],
  })
);

export const CommentSectionCard = styled.div(
  ({ theme: { pallette } }: any) => ({
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    background: pallette.common.white,
    borderRadius: "10px",
    color: pallette.secondary.dark,
  }),
  mq({
    padding: ["1.5rem", "1.5rem", "1.5rem 2rem 3rem 2rem"],
  })
);

export const CommentSectionHeader = styled.p(
  TypographyStyles.h3,
  ({ theme: { pallette, typography } }: any) => ({
    fontWeight: typography.bold,
    color: pallette.text.main,
    textTransform: "capitalize",
  })
);

export const CommentSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ReplySectionContent = styled(CommentSectionContent)({
  paddingTop: "2rem",
  marginLeft: "-1.5rem",
});

export const CommentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
`;

export const AuthorName = styled.span(
  TypographyStyles.h4,
  ({ theme: { pallette } }: any) => ({
    color: pallette.text.main,
  })
);

export const AuthorUsername = styled.span(
  TypographyStyles.h4,
  ({ theme: { pallette, typography } }: any) => ({
    fontWeight: typography.fontWeight.regular,
    color: pallette.text.light,
  })
);

export const ContentHeaderGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;

export const ReplyButton = styled(ViewButton)({
  marginLeft: "auto",
  textDecorationLine: "none",
});

export const Content = styled.p(
  TypographyStyles.body2,
  ({ theme: { pallette } }: any) => ({
    color: pallette.text.light,
  })
);

export const ReplyingToUsername = styled.span(
  ({ theme: { pallette, typography } }: any) => ({
    fontWeight: typography.fontWeight.bold,
    color: pallette.text.dark,
    paddingRight: "0.5rem",
  })
);

export const Avatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;

export const AvatarGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const Timeline = styled.div(({ theme: { pallette } }: any) => ({
  width: "1.5px",
  height: "100%",
  background: pallette.text.light,
  mixBlendMode: "normal",
  opacity: 0.1,
}));

export const HidePartialTimeline = styled.div(
  ({ theme: { pallette } }: any) => ({
    position: "absolute",
    marginTop: "22.5px",
    width: "1.5px",
    height: "calc(100% - 22.5px)",
    background: pallette.common.white,
    mixBlendMode: "normal",
    marginLeft: "-1.8rem",
  })
);

export const ContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CommentDivider = styled.div`
  height: 1px;
  width: 100%;

  background: #8c92b3;
  mix-blend-mode: normal;
  opacity: 0.25;
`;
