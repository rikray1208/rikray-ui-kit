import {Args, ComponentMeta, ComponentStory} from "@storybook/react";
import Input from "../../components/Input";
import React from "react";

export default {
    title: 'Design System/Inputs/Input',
    component: Input
} as ComponentMeta<typeof Input>;

export const decorators = [
    (Story: any) => (
        <div style={{ margin: '3em' }}>
            <Story />
        </div>
    ),
];

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const SmallInput = Template.bind({});
SmallInput.decorators = decorators
SmallInput.args = {
    placeholder: 'Placeholder...',
    Size: 'Small'
}

export const MediumInput = Template.bind({});
MediumInput.decorators = decorators
MediumInput.args = {
    placeholder: 'Placeholder...',
    Size: 'Medium'
}

export const LargeInput = Template.bind({});
LargeInput.decorators = decorators
LargeInput.args = {
    placeholder: 'Placeholder...',
    Size: 'Large'
}

export const PrefixInput = Template.bind({});
PrefixInput.decorators = decorators
PrefixInput.args = {
    placeholder: 'Placeholder...',
    Size: 'Small',
    prefix: 'https://'
}

export const PostfixInput = Template.bind({});
PostfixInput.decorators = decorators
PostfixInput.args = {
    placeholder: 'Placeholder...',
    Size: 'Small',
    postfix: '.com'
}

export const PrefixAndPostfixInput = Template.bind({});
PrefixAndPostfixInput.decorators = decorators
PrefixAndPostfixInput.args = {
    placeholder: 'Placeholder...',
    Size: 'Small',
    prefix: 'https://',
    postfix: '.com'
}
