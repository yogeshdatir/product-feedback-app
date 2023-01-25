import styled from "@emotion/styled";
import React from "react";
import { ITheme } from "../../utils/types";
import { StyledLabel, StyledSubLabel } from "./InputField";

interface Props
  extends React.ClassAttributes<HTMLTextAreaElement>,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  subLabel: string;
}

export const StyledTextarea = styled.textarea(
  ({ theme: { pallette, typography } }: { theme: ITheme }) => ({
    fontWeight: typography.fontWeight.regular,
    fontSize: typography.body2.fontSize,
    lineHeight: typography.body2.lineHeight,
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
      outline: `1.5px solid ${pallette.info.main}`,
    },
  })
);

const TextareaField = ({ label, subLabel, ...textareaAttributes }: Props) => {
  return (
    <div>
      <StyledLabel as="label">{label}</StyledLabel>
      <StyledSubLabel as="p">{subLabel}</StyledSubLabel>
      <StyledTextarea {...textareaAttributes} />
    </div>
  );
};

export default TextareaField;
