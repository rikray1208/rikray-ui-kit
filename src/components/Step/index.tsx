import { Check } from 'lucide-react';
import React, { FC } from 'react';

import { StepContent, StepDescription, StepIcon, StepItem, StepLine, StepTitle, StepWrapper } from './StyledStep';
export interface StepElement {
    title: string;
    description?: string;
    icon?: React.ReactNode;
}
export interface StepProps {
    current: number;
    steps: StepElement[];
    vertical?: boolean;
    small?: boolean;
}
export enum State {
    LESS = -1,
    CURRENT = 0,
    GREATER = 1,
}
const Step: FC<StepProps> = (props) => {
    const { current, vertical = false, steps, small = false } = props;
    function validatedNumber(index: number): string {
        return index < 10 ? ' ' + index + ' ' : index + '';
    }
    function stepState(index: number): number {
        if (index < current) return State.LESS;
        if (index > current) return State.GREATER;
        return State.CURRENT;
    }
    return (
        <>
            <StepWrapper vertical={vertical}>
                {steps.map((step, index) => (
                    <StepItem
                        id={'item'}
                        key={step.title}
                        style={index == steps.length - 1 ? { flex: '0 1 0' } : {}}
                        vertical={vertical}
                    >
                        <StepIcon
                            id={'step number'}
                            isIcon={index < current}
                            small={small}
                            state={stepState(index)}
                            vertical={vertical}
                        >
                            {index < current ? <Check size={small ? 21 : 24} /> : validatedNumber(index + 1)}
                        </StepIcon>
                        <StepContent id={'content'} isLast={index == steps.length - 1} vertical={vertical}>
                            <StepTitle id={'title'} small={small} state={stepState(index)}>
                                {step.title}
                            </StepTitle>
                            <StepDescription
                                id={'description'}
                                small={small}
                                state={stepState(index)}
                                vertical={vertical}
                            >
                                {step.description}
                            </StepDescription>
                        </StepContent>

                        {index !== steps.length - 1 && (
                            <StepLine id={'step line'} small={small} vertical={vertical} state={stepState(index + 1)} />
                        )}
                    </StepItem>
                ))}
            </StepWrapper>
        </>
    );
};

export default Step;
