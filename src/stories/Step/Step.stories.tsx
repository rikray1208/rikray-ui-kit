import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {Step, ThemeProvider} from "../../index";
import {StepElement} from "../../components/Step";

const decorators = [
    (Story: any) => (
        <ThemeProvider>
            <div style={{padding: '30px'}}>
                <Story/>
            </div>
        </ThemeProvider>
    ),
];

export default {
    title: 'Design System/Navigation/Step',
    component: Step,
    decorators: decorators,
    argTypes: {
        current: {
            description: 'Задает текуший шаг',
            control: { type: 'number' },
            defaultValue: 0
        },
        small: {
            description: 'Уменшает размер компонента',
            control: { type: 'boolean' },
            defaultValue: true
        },
        vertical: {
            description: 'Изменяет направление компонента на вертикальное',
            control: { type: 'boolean' },
            defaultValue: false
        }
    }
} as ComponentMeta<typeof Step>;

const Steps: StepElement[] = [
    {title: 'Login', description:'This is a description'},
    {title: 'Password asd', description:'This is a description'},
    {title: 'Auth Code', description:'This is a description'},
]

const Template: ComponentStory<typeof Step> = (args) => <Step {...args}/>;

export const BaseStep = Template.bind({})
BaseStep.args = {
    steps: Steps,
    current: 0
}
