import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { FC, useEffect, useState } from 'react';

import { InputControls, InputWrapper, StyledInputNumber } from './StyledInputNumber';

import { Shape, Size, Status } from '../types';

export type InputNumberType = Status | 'primary';
export interface InputNumberProps {
    type?: InputNumberType;
    size?: Size;
    shape?: Shape;
    defaultValue?: number;
    max?: number;
    min?: number;
    step?: number;
    controls?: boolean;
    style?: React.CSSProperties;
    className?: string;
}
const InputNumber: FC<InputNumberProps> = (props) => {
    const {
        type = 'primary',
        min,
        max,
        defaultValue,
        step = 1,
        controls = true,
        size = 'Medium',
        shape = 'SemiRound',
        style,
        className = '',
    } = props;
    const [value, setValue] = useState<string | number>('');
    const [wrapperClassName, setWrapperClassName] = useState('InputNumberWrapper');
    function valueHandle(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value !== '') {
            const number = parseInt(event.target.value, 10);

            if (max && min) {
                if (number <= max && number >= min) {
                    setValue(number);
                }
            } else {
                if (max && number <= max) {
                    setValue(number);
                }

                if (min && number >= min) {
                    setValue(number);
                }
            }
        } else {
            setValue(event.target.value);
        }
    }
    function increment() {
        function changeValue(prev: string | number) {
            if (typeof prev === 'number') {
                if (max && max >= prev + step) {
                    return step + prev;
                } else {
                    return prev;
                }
            } else {
                return step;
            }
        }
        setValue(changeValue);
    }
    function decrement() {
        function changeValue(prev: string | number) {
            if (typeof prev === 'number') {
                if (typeof min === 'number' && min <= prev - step) {
                    return prev - step;
                } else {
                    return prev;
                }
            } else {
                return prev;
            }
        }

        setValue(changeValue);
    }
    function focusHandler() {
        setWrapperClassName('InputNumberWrapper focused');
    }

    function blurHandler() {
        setWrapperClassName('InputNumberWrapper');
    }

    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue);
        }
    }, [defaultValue]);

    return (
        <InputWrapper
            style={style}
            tabIndex={-1}
            variant={type}
            size={size}
            shape={shape}
            className={wrapperClassName + className}
        >
            <StyledInputNumber
                className='NumberInput'
                onFocus={focusHandler}
                onBlur={blurHandler}
                onChange={valueHandle}
                value={value}
                max={max}
                min={min}
                step={step}
                type={'number'}
                isControls={controls}
            />
            {controls && (
                <InputControls className='Controls' variant={type}>
                    <ChevronUp onClick={increment} size={16} />
                    <ChevronDown onClick={decrement} size={16} />
                </InputControls>
            )}
        </InputWrapper>
    );
};

export default InputNumber;
