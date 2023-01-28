import { useNavigate } from "react-router";
import { goBack } from "../utils/sharedFunctions";
import { StyledButton } from "./Common.styled";
import { ReactComponent as LeftArrow } from "../assets/shared/icon-arrow-left.svg";
import styled from "@emotion/styled";

interface Props {
  isLightThemed?: boolean;
}

// TODO: remove any type
export const StyledGoBackButton = styled(StyledButton)(
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
    color: isLightThemed ? pallette.text.white : pallette.text.buttonPrimary,
    svg: {
      path: {
        stroke: isLightThemed
          ? pallette.text.white
          : pallette.text.buttonPrimary,
      },
    },
  })
);

const GoBackButton = ({ isLightThemed = false }: Props) => {
  const navigate = useNavigate();
  return (
    <StyledGoBackButton
      onClick={() => goBack(navigate)}
      isLightThemed={isLightThemed}
    >
      <LeftArrow />
      Go back
    </StyledGoBackButton>
  );
};

export default GoBackButton;
