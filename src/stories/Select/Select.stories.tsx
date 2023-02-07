import {ThemeProvider} from "../../index";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import Select from "../../components/Select";

const options = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'robert', label: 'Robert' },
    { value: 'john', label: 'John' },
    { value: 'thomas', label: 'Thomas' },
    { value: 'charles', label: 'Charles' },
    { value: 'christopher', label: 'Christopher' },
    { value: 'matthew', label: 'Matthew' },
    { value: 'mark', label: 'Mark', disabled: true },
]
export const decorators = [
    (Story: any) => (
        <ThemeProvider>
            <Story/>
        </ThemeProvider>
    ),
];

export default {
    title: 'Design System/Data Entry/Select',
    component: Select,
    decorators: decorators,
    argTypes: {
        size: {
            options: ['Small', 'Medium', 'Large'],
            description: 'Переключатель мульти и сингл режима',
            control: { type: 'radio' },
        },
        shape: {
            options: ['Round', 'SemiRound', 'Rectangle'],
            description: 'Меняет форму компонета',
            control: { type: 'radio' },
        },
        type: {
            options: ['primary', 'success', 'warning', 'error'],
            description: 'Меняет цвет границ и тени',
            control: { type: 'radio' },
        },
        multiple: {
            description: 'Переключатель режимов "multi" и "single"',
            control: { type: 'boolean' },
        },
        width: {
            description: 'Задает конкретную ширину селекту',
            control: { type: 'number' },
        },
    }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args}/>;

export const BaseSelect = Template.bind({})
BaseSelect.args = {
    options,
    defaultSelected: [{ value: 'jack', label: 'Jack' }],
    width: 250
}

