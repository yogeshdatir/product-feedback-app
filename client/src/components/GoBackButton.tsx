import { useNavigate } from "react-router";
import { goBack } from "../utils/sharedFunctions";
import { StyledButton } from "./Common.styled";
import { ReactComponent as LeftArrow } from "../assets/shared/icon-arrow-left.svg";

interface Props {
  isLightThemed?: boolean;
}

const GoBackButton = ({ isLightThemed = false }: Props) => {
  const navigate = useNavigate();
  return (
    <StyledButton isLight={isLightThemed} onClick={() => goBack(navigate)}>
      <LeftArrow />
      Go back
    </StyledButton>
  );
};

export default GoBackButton;
