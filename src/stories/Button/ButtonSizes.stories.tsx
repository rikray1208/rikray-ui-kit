import Button from "../../components/Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {ThemeProvider} from "../../index";

export const decorators = [
    (Story: any) => (
        <ThemeProvider>
            <Story />
        </ThemeProvider>
    ),
];
export default {
    title: 'Design System/Global/Button/Sizes',
    component: Button,
    decorators: decorators,

} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const LargeButton = Template.bind({});
LargeButton.args = {
    children: 'Кнопка',
    size: 'Large'
}

export const MediumButton = Template.bind({});
MediumButton.args = {
    children: 'Кнопка',
    size: 'Medium'
}

export const SmallButton = Template.bind({});
SmallButton.args = {
    children: 'Кнопка',
    size: 'Small'
}
