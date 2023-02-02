import styled from '@emotion/styled';
import { TypographyStyles } from '../../utils/themes';
import { type ITheme } from '../../utils/types';

export const StyledSelect = styled.div(
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    backgroundColor: pallette.grey.light,
    border: 'none',
    borderRadius: '5px',
    width: '100%',
    position: 'relative',
  }),
);

export const StyledSelectInput = styled.div(
  TypographyStyles.body2,
  ({ theme: { pallette, typography } }: { theme: ITheme }) => ({
    backgroundColor: pallette.grey.light,
    border: 'none',
    borderRadius: '5px',
    width: '100%',
    position: 'relative',
    padding: '0.75rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: typography.fontWeight.regular,
    color: pallette.text.main,
    textTransform: 'capitalize',
    cursor: 'pointer',
    userSelect: 'none',

    ':focus': {
      outline: `1.5px solid ${pallette.info.main}`,
    },

    '.select-arrow': {
      paddingTop: '3px',
      height: '10px',
    },
  }),
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

export const StyledOption = styled.li(
  TypographyStyles.body1,
  ({ theme: { pallette }, isHighlightedIndex }: any) => ({
    padding: '0.75rem 1.5rem',
    textTransform: 'capitalize',
    fontWeight: 400,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: isHighlightedIndex ? pallette.text.dark : pallette.text.light,
    '&:not(:last-child)': {
      borderBottom: '1.5px solid rgba(58, 67, 116, 0.15)',
    },
    ':hover': { color: pallette.text.dark },
  }),
);

interface IStyledArrowDown {
  openDropdown: boolean
}

export const StyledArrowDown = styled.img<IStyledArrowDown>`
  transition: all 0.2s ease-out;
  transform: ${({ openDropdown }: IStyledArrowDown) => (openDropdown ? 'rotate(180deg)' : 'rotate(0)')};
`;
