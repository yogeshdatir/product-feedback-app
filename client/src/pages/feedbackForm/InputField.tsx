import styled from "@emotion/styled";
import React from "react";
import { TypographyStyles } from "../../utils/themes";
import { ITheme } from "../../utils/types";

interface Props
  extends React.ClassAttributes<HTMLInputElement>,
    React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  subLabel: string;
  error?: string;
}

export const StyledLabel = styled("h4")(
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    color: pallette.text.main,
  }),
  TypographyStyles.h4
);

export const StyledSubLabel = styled("h4")(
  ({ theme: { pallette, typography } }: { theme: ITheme }) => ({
    color: pallette.text.light,
    fontWeight: typography.fontWeight.regular,
    paddingBottom: "1rem",
  }),
  TypographyStyles.h4
);

export const StyledInput = styled.input(
  ({ theme: { pallette, typography }, error }: any) => ({
    backgroundColor: pallette.grey.light,
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "5px",
    width: "100%",
    fontWeight: typography.fontWeight.regular,
    color: pallette.text.main,
    ":focus": {
      outline: error
        ? `1.5px solid ${pallette.error.main}`
        : `1.5px solid ${pallette.info.main}`,
    },
    outline: error ? `1.5px solid ${pallette.error.main}` : ``,
  }),
  TypographyStyles.body2
);

export const ErrorMessage = styled.span(
  ({ theme: { pallette, typography } }: { theme: ITheme }) => ({
    fontWeight: typography.fontWeight.regular,
    color: pallette.error.main,
  }),
  TypographyStyles.body2
);

const InputField = ({ label, subLabel, error, ...inputAttributes }: Props) => {
  return (
    <div>
      <StyledLabel as="label">{label}</StyledLabel>
      <StyledSubLabel as="p">{subLabel}</StyledSubLabel>
      <StyledInput error={error} {...inputAttributes} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default InputField;
