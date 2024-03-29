import styled from "@emotion/styled";
import React, { CSSProperties } from "react";
import { TypographyStyles } from "../../utils/themes";
import { ErrorMessage, StyledLabel, StyledSubLabel } from "./InputField";

interface Props
  extends React.ClassAttributes<HTMLTextAreaElement>,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  subLabel: string;
  error?: string;
  fieldContainerStyle?: CSSProperties;
}

export const StyledTextarea = styled.textarea(
  TypographyStyles.body2,
  ({ theme: { pallette, typography }, error }: any) => ({
    fontWeight: typography.fontWeight.regular,
    color: pallette.text.main,
    backgroundColor: pallette.grey.light,
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "5px",
    width: "100%",
    maxWidth: "100%",
    "::-webkit-resizer": {
      display: "none",
    },
    ":focus": {
      outline: error
        ? `1.5px solid ${pallette.error.main}`
        : `1.5px solid ${pallette.info.main}`,
    },
    "::placeholder": {
      color: pallette.text.light,
    },
    outline: error ? `1.5px solid ${pallette.error.main}` : "",
  })
);

function TextareaField({
  label,
  subLabel,
  error,
  fieldContainerStyle,
  ...textareaAttributes
}: Props) {
  return (
    <div style={fieldContainerStyle}>
      {label && <StyledLabel as="label">{label}</StyledLabel>}
      {subLabel && <StyledSubLabel as="p">{subLabel}</StyledSubLabel>}
      <StyledTextarea error={error} {...textareaAttributes} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}

export default TextareaField;
