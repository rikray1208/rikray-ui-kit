import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { FC } from 'react';

import { AccordionProps } from '../../components/Accordion';
import AccordionItem from '../../components/Accordion/AccordionItem';
import { Accordion, ThemeProvider } from '../../index';

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
    );
};

export default {
    title: 'Design System/Global/Accordion',
    component: Accordion,
    decorators,
    argTypes: {
        size: {
            options: ['Small', 'Medium', 'Large'],
            description: 'Изменяет размер компонента',
            control: { type: 'radio' },
        },
        shape: {
            options: ['Round', 'SemiRound', 'Rectangle'],
            description: 'Меняет форму компонета',
            control: { type: 'radio' },
        },
        border: {
            description: 'Позволяет убрать границы у компонента',
            control: { type: 'boolean' },
        },
        filled: {
            description: 'Выделает заливкой заголовки компонента',
            control: { type: 'boolean' },
        },
    },
} as ComponentMeta<typeof Accordion>;
const Template: ComponentStory<typeof Accordion> = (args) => <AccordionComponent {...args} />;

export const DefaultAccordion = Template.bind({});
DefaultAccordion.args = {};
