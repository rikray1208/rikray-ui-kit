import { ChevronDown, ChevronRight } from 'lucide-react';
import React, { FC } from 'react';

import { MenuList } from './index';

import { useMenu } from './hooks';
import { DividerUpperStyles, ItemContent, StyledItem } from './StyledMenu';

import Divider from '../Divider';

import type { MenuItem } from './index';

const Item: FC<MenuItem> = (props) => {
    const { state } = useMenu();
    const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
        event.stopPropagation();

        if (props.onClick && !props.group) {
            props.onClick(props);
        }
    };

    const isHeading = !!state.globalList.find((el) => el.id == props.id) || !!props.children;

    return (
        <StyledItem
            onClick={handleClick}
            isGroup={!!props.group}
            heading={isHeading}
            className={props.className + ' ' + (props.group ? 'ItemGroup' : '')}
        >
            <ItemContent>
                {props.divider && <Divider disabled style={DividerUpperStyles} />}
                {props.title}
                {!state.activeElements.includes(props.id) && props.children && <ChevronRight size={16} />}
                {state.activeElements.includes(props.id) && props.children && <ChevronDown size={16} />}
            </ItemContent>

            {props.children && <MenuList list={props.children} />}
        </StyledItem>
    );
};
export default Item;
