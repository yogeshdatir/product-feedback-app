import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import React from "react";
import { H4 } from "../../components/Common.styled";
import { ITheme } from "../../utils/types";

interface Props
  extends React.ClassAttributes<HTMLInputElement>,
    React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  subLabel: string;
}

export const StyledLabel = styled(H4)(
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    color: pallette.text.main,
  })
);

export const StyledSubLabel = styled(H4)(
  ({ theme: { pallette, typography } }: { theme: ITheme }) => ({
    color: pallette.text.light,
    fontWeight: typography.fontWeight.regular,
    paddingBottom: "1rem",
  })
);

export const StyledInput = styled.input(
  ({ theme: { pallette, typography } }: { theme: ITheme }) => ({
    backgroundColor: pallette.grey.light,
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "5px",
    width: "100%",
    fontWeight: typography.fontWeight.regular,
    fontSize: typography.body2.fontSize,
    lineHeight: typography.body2.lineHeight,
    color: pallette.text.main,
    ":focus": {
      outline: `1.5px solid ${pallette.info.main}`,
    },
  })
);

const InputField = ({ label, subLabel, ...inputAttributes }: Props) => {
  return (
    <div>
      <StyledLabel as="label">{label}</StyledLabel>
      <StyledSubLabel as="p">{subLabel}</StyledSubLabel>
      <StyledInput {...inputAttributes} />
    </div>
  );
};

export default InputField;
