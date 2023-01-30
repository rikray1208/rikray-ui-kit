import {ComponentMeta, ComponentStory} from "@storybook/react";
import Input from "../../components/Input";
import React from "react";
import {ThemeProvider} from "../../index";

export const decorators = [
    (Story: any) => (
        <ThemeProvider>
            <div style={{ margin: '3em' }}>
                <Story />
            </div>
        </ThemeProvider>
    ),
];

export default {
    title: 'Design System/Inputs/Input',
    component: Input,
    decorators: decorators
} as ComponentMeta<typeof Input>;


const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const SmallInput = Template.bind({});
SmallInput.args = {
    placeholder: 'Placeholder...',
    Size: 'Small'
}

export const MediumInput = Template.bind({});
MediumInput.args = {
    placeholder: 'Placeholder...',
    Size: 'Medium'
}

export const LargeInput = Template.bind({});
LargeInput.args = {
    placeholder: 'Placeholder...',
    Size: 'Large'
}

export const PrefixInput = Template.bind({});
PrefixInput.args = {
    placeholder: 'Placeholder...',
    Size: 'Small',
    prefix: 'https://'
}

export const PostfixInput = Template.bind({});
PostfixInput.args = {
    placeholder: 'Placeholder...',
    Size: 'Small',
    postfix: '.com'
}

export const PrefixAndPostfixInput = Template.bind({});
PrefixAndPostfixInput.args = {
    placeholder: 'Placeholder...',
    Size: 'Small',
    prefix: 'https://',
    postfix: '.com'
}
