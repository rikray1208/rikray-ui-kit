import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {ThemeProvider} from "../../index";
import Card from "../../components/Card";

const decorators = [
    (Story: any) => (
        <ThemeProvider>
            <Story />
        </ThemeProvider>
    ),
];

export default {
    title: 'Design System/Global/Card',
    component: Card,
    decorators: [
        (Story: any) => (
            <ThemeProvider>
               <div>
                   <Story />
               </div>
            </ThemeProvider>
        ),
    ]
} as ComponentMeta<typeof Card>;


const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
    header: 'Card title',
    children: [<p style={{margin: ' 0 100px 0 0'}}>Card content...</p>,<p style={{margin: 0}}>Card content...</p>,<p style={{margin: 0}}>Card content...</p>,<p style={{margin: 0}}>Card content...</p>],
    shape: 'SemiRound'
}

