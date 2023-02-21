import {Accordion, Card, ThemeProvider} from "../../index";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {FC} from "react";
import AccordionItem from "../../components/Accordion/AccordionItem";
import {AccordionProps} from "../../components/Accordion";

const decorators = [
    (Story: any) => (
        <ThemeProvider>
            <div>
                <Story />
            </div>
        </ThemeProvider>
    ),
];

const AccordionComponent: FC<AccordionProps> = (props) => {
    
    return (
        <Accordion {...props}>
            <AccordionItem title={'Header 1'}>
                <span> Text content 1 </span>
            </AccordionItem>
            <AccordionItem title={'Header 2'}>
                <span> Text content 2 </span>
            </AccordionItem>
            <AccordionItem title={'Header 3'}>
                <span> Text content 3 </span>
            </AccordionItem>
        </Accordion>
    )
}

export default {
    title: 'Design System/Global/Accordion',
    component: Accordion,
    decorators,
} as ComponentMeta<typeof Accordion>;
const Template: ComponentStory<typeof Accordion> = (args) => <AccordionComponent {...args} />;

export const DefaultAccordion = Template.bind({});
DefaultAccordion.args = {

}
