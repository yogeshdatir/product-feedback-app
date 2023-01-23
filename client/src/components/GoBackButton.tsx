import { useNavigate } from "react-router";
import { goBack } from "../utils/sharedFunctions";
import { StyledButton } from "./Common.styled";
import { ReactComponent as LeftArrow } from "../assets/shared/icon-arrow-left.svg";
import Button from "./Button";
import styled from "@emotion/styled";

interface Props {
  isLightThemed?: boolean;
}

export const StyledGoBackButton = styled(Button)<{ isLightThemed?: boolean }>(
  ({ theme: { pallette }, isLightThemed }: any) => ({
    paddingLeft: "0",
    paddingRight: "0",
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    textTransform: "capitalize",
    ":hover": {
      textDecoration: "underline",
    },
    svg: {
      path: {
        stroke: isLightThemed ? pallette.text.white : pallette.text.primary,
      },
    },
  })
);

const GoBackButton = ({ isLightThemed = false }: Props) => {
  const navigate = useNavigate();
  return (
    <StyledGoBackButton
      onClick={() => goBack(navigate)}
      color={isLightThemed ? "white" : "light"}
      isLightThemed={isLightThemed}
    >
      <LeftArrow />
      Go back
    </StyledGoBackButton>
  );
};

export default GoBackButton;
