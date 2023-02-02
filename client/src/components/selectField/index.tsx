import React, { useRef, useState } from 'react';
import {
  StyledLabel,
  StyledSubLabel,
} from '../../pages/feedbackForm/InputField';
import {
  SelectDropdown,
  StyledArrowDown,
  StyledOption,
  StyledSelect,
  StyledSelectInput,
} from './SelectField.styled';
import ArrowDown from '../../assets/shared/icon-arrow-down.svg';
import { ReactComponent as CheckIcon } from '../../assets/shared/icon-check.svg';
import useClickOutside from '../../hooks/useClickOutside';

export interface IOption {
  value: string | number
  displayValue: string | number
}

interface Props
  extends React.ClassAttributes<HTMLDivElement>,
  React.HTMLAttributes<HTMLDivElement> {
  label: string
  subLabel: string
  selectedOption: IOption
  setSelectedOption: (selectedOption: IOption) => void
  options: IOption[]
}

// TODO: Add validations (error handling) feature
// TODO: Add placeholder feature (with and without showing placeholder in dropdown)
// TODO: Add option groups feature

function SelectField({
  label,
  subLabel,
  selectedOption,
  setSelectedOption,
  options,
  ...ulAttributes
}: Props) {
  const selectedOptionIndex: number = options.findIndex(
    (option: IOption) => option.value === selectedOption.value,
  );
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => {
    if (openDropdown) setOpenDropdown(!openDropdown);
  });

  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(
    selectedOptionIndex < 0 ? 0 : selectedOptionIndex,
  );

  const toggleDropdown = () => {
    setOpenDropdown((openDropdown: boolean) => !openDropdown);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.code) {
      case 'Enter':
      case 'NumpadEnter':
      case 'Space':
        setOpenDropdown((prev: boolean) => !prev);
        if (openDropdown) selectOption(options[highlightedIndex]);
        break;

      case 'ArrowUp':
      case 'ArrowDown': {
        if (!openDropdown) {
          setOpenDropdown(true);
          break;
        }

        const newHighlightedIndex = highlightedIndex + (event.code === 'ArrowDown' ? 1 : -1);
        if (newHighlightedIndex >= 0 && newHighlightedIndex < options.length) {
          setHighlightedIndex(newHighlightedIndex);
        }
        break;
      }

      case 'Escape':
      case 'Tab':
        setOpenDropdown(false);
        break;
    }
  };

  const selectOption = (option: IOption) => {
    setSelectedOption(option);
    setOpenDropdown(false);
  };

  return (
    <div>
      <StyledLabel as="label">{label}</StyledLabel>
      <StyledSubLabel as="p">{subLabel}</StyledSubLabel>
      <StyledSelect {...ulAttributes} ref={wrapperRef}>
        <StyledSelectInput
          tabIndex={0}
          onClick={toggleDropdown}
          onBlur={() => {
            // this onBlur prevent onClick of the children, so used onMouseDown
            setOpenDropdown(false);
          }}
          onKeyDown={handleKeyDown}
        >
          <span>{selectedOption.displayValue}</span>
          <StyledArrowDown
            src={ArrowDown}
            alt="dropdown-arrow"
            className="select-arrow"
            openDropdown={openDropdown}
          />
        </StyledSelectInput>
        {openDropdown && (
          <SelectDropdown>
            {options.map((option: IOption, index: number) => (
              <StyledOption
                key={option.value}
                  // this onBlur from parent prevents onClick of options, so used onMouseDown
                onMouseDown={() => { selectOption(option); }}
                onMouseEnter={() => {
                  setHighlightedIndex(index);
                }}
                isHighlightedIndex={highlightedIndex === index}
              >
                <span>{option.displayValue}</span>
                {option.value === selectedOption.value && <CheckIcon />}
              </StyledOption>
            ))}
          </SelectDropdown>
        )}
      </StyledSelect>
    </div>
  );
}

export default SelectField;
