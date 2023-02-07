import React, {FC, useEffect, useRef, useState} from 'react';
import {ChevronDown, ChevronUp, X} from "lucide-react";
import {
    OptionItem,
    OptionsList,
    SelectedValue,
    SelectWrapper,
    Select,
    SelectedButton
} from "./StyledSelect";
import {Shape, Size, Status} from "../types";


export type SelectType = Status | 'primary';
type Option = {
    value: number | string;
    label: string;
    disabled?: boolean
}
export type SelectProps = {
    options: Option[];
    defaultSelected?: Option[];
    multiple?: boolean;
    shape?: Shape,
    size?: Size,
    type?: SelectType,
    width?: number
}
const BaseSelect: FC<SelectProps> = ({ options, defaultSelected, multiple, shape, type, size, width}) => {
    const [isShow, setIsShow] = useState(false);
    const [selected, setSelected] = useState<Option[]>(defaultSelected ? [...defaultSelected] : []);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const selectRef = useRef<HTMLDivElement | null>(null)

    function toggleShow() {
        setIsShow(prevState => !prevState)
    }
    function toggleOption(option: Option, event?: React.MouseEvent<HTMLButtonElement | HTMLLIElement, MouseEvent>) {
        if (event) event.stopPropagation()
        if (option.disabled) return;
        if (multiple) {
            const newSelected = [...selected];
            const index = selected.findIndex((selectedOption) => selectedOption.value === option.value);
            if (index === -1) {
                newSelected.push(option);
            } else {
                newSelected.splice(index, 1);
            }
            setSelected(newSelected);
        } else {
            setSelected([option])
            setIsShow(false)
        }
    }
    useEffect(() => {
        const KeyboardEventHandler = (event: KeyboardEvent) => {
            if (event.target != selectRef.current) return
            switch (event.code) {
                case "Enter":
                case "Space":
                    setIsShow(prev => !prev)
                    if (isShow) toggleOption(options[highlightedIndex])
                    break
                case "ArrowUp":
                case "ArrowDown": {
                    if (!isShow) {
                        setIsShow(true)
                        break
                    }

                    const newValue = highlightedIndex + (event.code === "ArrowDown" ? 1 : -1)
                    if (newValue >= 0 && newValue < options.length) {
                        setHighlightedIndex(newValue)
                    }
                    break
                }
                case "Escape":
                    setIsShow(false)
                    break
            }
        }
        selectRef.current?.addEventListener("keydown", KeyboardEventHandler)

        return () => {
            selectRef.current?.removeEventListener("keydown", KeyboardEventHandler)
        }
    }, [isShow, highlightedIndex, options])

    const renderedOptions: React.ReactNode = options.map((option, index) => {
        const isSelected = selected.findIndex((selectedOption) => selectedOption.value === option.value) !== -1;

        return (
            <OptionItem
                key={option.value}
                onClick={(event) => toggleOption(option, event)}
                onMouseEnter={() => setHighlightedIndex(index)}
                isSelected={isSelected}
                isDisabled={option?.disabled}
                highlighted={index === highlightedIndex}
                type={type}
            >
                {option.label}
            </OptionItem>
        );
    });

    return (
        <SelectWrapper size={size}>
            <Select
                shape={shape}
                type={type}
                ref={selectRef}
                tabIndex={0}
                onBlur={() => setIsShow(false)}
                onClick={toggleShow}
                style={width ? {width: width + 'px'} : {}}
            >
                <SelectedValue>
                    {
                        multiple ?
                            selected.map((option) =>
                                <SelectedButton
                                    key={option.value}
                                    onClick={(event) => toggleOption(option, event)}
                                    shape={shape}
                                >
                                    {option.label}
                                    <X size={12}/>
                                </SelectedButton>
                            )
                            :
                            <>{selected[0]?.label}</>
                    }
                </SelectedValue>
                {
                    isShow ?
                    <ChevronUp style={{flexShrink: 0}} width={16} color={'rgba(0, 0, 0, 35%)'}/>
                    :
                    <ChevronDown style={{flexShrink: 0}} width={16} color={'rgba(0, 0, 0, 35%)'}/>
                }
                <OptionsList
                    shape={shape}
                    type={type}
                    isOpen={isShow}
                >
                    {renderedOptions}
                </OptionsList>
            </Select>
        </SelectWrapper>
    );
};

BaseSelect.defaultProps = {
    multiple: false,
    options: [],
    defaultSelected: [],
    shape: 'SemiRound',
    type: 'primary',
    size: "Medium"
}
export default BaseSelect;

