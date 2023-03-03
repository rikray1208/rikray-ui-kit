import React, { FC, useState } from 'react';

import { TabItem, TabsList, TabsWrapper } from './StyledTabs';

import type { Size } from '../types';
import type { LucideIcon } from 'lucide-react';

interface TabItem {
    id: number;
    header: string;
    content: React.ReactNode;
    icon?: React.ReactElement<LucideIcon>;
}
export interface TabsProps {
    items: TabItem[];
    onChange?: (tab: TabItem) => void;
    defaultActiveTabId?: number;
    centered?: boolean;
    size?: Size;
    bold?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
const TabSwitcher: FC<TabsProps> = (props) => {
    const { items, defaultActiveTabId, onChange, centered, bold, size, ...defProps } = props;

    const [activeID, setActiveID] = useState(defaultActiveTabId ?? items[0].id);
    const activeTab = items.find((tab) => tab.id === activeID);

    function handleOnClick(tab: TabItem) {
        setActiveID(tab.id);
        onChange && onChange(tab);
    }

    return (
        <TabsWrapper {...defProps}>
            <TabsList centered={centered}>
                {items.map((tab) => (
                    <TabItem
                        key={tab.id}
                        onClick={() => handleOnClick(tab)}
                        className={activeID === tab.id ? 'Active' : ''}
                        bold={bold}
                        size={size}
                    >
                        {tab.icon && tab.icon}
                        {tab.header}
                    </TabItem>
                ))}
            </TabsList>
            {activeTab?.content}
        </TabsWrapper>
    );
};

export default TabSwitcher;
