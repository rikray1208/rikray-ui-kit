import React, { FC, PropsWithChildren, useState } from 'react';

import { MenuContext, MenuReducer } from './index';

import { MenuItem } from '../index';

interface ProviderProps {
    list: MenuItem[];
    children?: React.ReactNode;
}
const MenuProvider: FC<ProviderProps> = ({ children, list }) => {
    const defaultState = {
        globalList: list || [],
        activeElements: [],
    };

    const [state, dispatch] = React.useReducer(MenuReducer, defaultState);
    const value = { state, dispatch };
    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export default MenuProvider;
