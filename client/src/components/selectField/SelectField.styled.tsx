import styled from "@emotion/styled";
import { ITheme } from "../../utils/types";

// TODO: refactor styles to use theme
export const StyledSelect = styled.div(
  ({ theme: { pallette, typography } }: { theme: ITheme }) => ({
    backgroundColor: pallette.grey.light,
    border: "none",
    borderRadius: "5px",
    width: "100%",
    position: "relative",
  })
);

export const StyledSelectInput = styled.div(
  ({ theme: { pallette, typography } }: { theme: ITheme }) => ({
    backgroundColor: pallette.grey.light,
    border: "none",
    borderRadius: "5px",
    width: "100%",
    position: "relative",
    padding: "0.75rem 1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: typography.fontWeight.regular,
    fontSize: typography.body2.fontSize,
    lineHeight: typography.body2.lineHeight,
    color: pallette.text.main,
    textTransform: "capitalize",
    cursor: "pointer",
    userSelect: "none",

    ":focus": {
      outline: `1.5px solid ${pallette.info.main}`,
    },

    ".select-arrow": {
      paddingTop: "3px",
      height: "10px",
    },
  })
);

export const SelectDropdown = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  margin-top: 1rem;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  border-radius: 10px;
  z-index: 99;
`;

export const StyledOption = styled.li<{ isHighlightedIndex: boolean }>`
  padding: 0.75rem 1.5rem;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;

  color: ${({ isHighlightedIndex }: { isHighlightedIndex: boolean }) =>
    isHighlightedIndex ? "#ad1fea" : "#647196"};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 1.5px solid rgba(58, 67, 116, 0.15);
  }

  :hover {
    color: #ad1fea;
  }
`;

interface IStyledArrowDown {
  openDropdown: boolean;
}

export const StyledArrowDown = styled.img<IStyledArrowDown>`
  transition: all 0.2s ease-out;
  transform: ${({ openDropdown }: IStyledArrowDown) =>
    openDropdown ? "rotate(180deg)" : "rotate(0)"};
`;
