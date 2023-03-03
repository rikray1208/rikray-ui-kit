import React, { FC, useEffect } from 'react';

import MenuProvider from './context/ContextProvider';
import { useMenu } from './hooks';
import Item from './Item';
import { StyledMenu } from './StyledMenu';

import { getMenuPatents } from '../../utils/helpers';

export interface MenuItem {
    id: number;
    title: string;
    group?: boolean;
    divider?: boolean;
    children?: MenuItem[];
    onClick?: (item: MenuItem) => void;
    className?: string;
}

export interface MenuProps {
    list: MenuItem[];
    onSelect?: (item: MenuItem) => void;
    defaultSelectedItem?: number;
}

const Menu: FC<MenuProps> = (props) => {
    const { list, defaultSelectedItem, onSelect } = props;

    return (
        <MenuProvider list={list}>
            <MenuList defaultSelectedItem={defaultSelectedItem} onSelect={onSelect} list={list} />
        </MenuProvider>
    );
};

export const MenuList: FC<MenuProps> = ({ list, onSelect, defaultSelectedItem }) => {
    const { state, dispatch } = useMenu();

    function handleSelect(item: MenuItem) {
        const activeItems = [...getMenuPatents(item.id, state.globalList), item.id];
        if (!state.activeElements.includes(item.id)) {
            dispatch({ type: 'clearAll' });
            dispatch({ type: 'add', payload: activeItems });

            onSelect && onSelect(item);
        }

        if (state.activeElements.includes(item.id) && !!item.children) {
            dispatch({ type: 'deleteItem', payload: item.id });
        }
    }

    useEffect(() => {
        if (defaultSelectedItem) {
            const activeItems = [...getMenuPatents(defaultSelectedItem, state.globalList), defaultSelectedItem];
            dispatch({ type: 'add', payload: activeItems });
        }
    }, [defaultSelectedItem]); // eslint-disable-line

    return (
        <StyledMenu className={'Menu'}>
            {list.map((item) => (
                <Item
                    key={item.id}
                    {...item}
                    className={'MenuItem' + ' ' + (state.activeElements.includes(item.id) ? 'Active' : '')}
                    onClick={handleSelect}
                />
            ))}
        </StyledMenu>
    );
};
export default Menu;
