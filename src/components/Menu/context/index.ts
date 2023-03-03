import React, { createContext } from 'react';

import { MenuItem } from '../index';
type State = {
    globalList: MenuItem[];
    activeElements: number[];
};

type Action = { type: 'add'; payload: number[] } | { type: 'deleteItem'; payload: number } | { type: 'clearAll' };

type Dispatch = (action: Action) => void;

export const MenuContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);
export function MenuReducer(state: State, action: Action) {
    switch (action.type) {
        case 'add': {
            return { ...state, activeElements: [...state.activeElements, ...action.payload] };
        }
        case 'clearAll': {
            return { ...state, activeElements: [] };
        }

        case 'deleteItem': {
            return { ...state, activeElements: state.activeElements.filter((el) => el !== action.payload) };
        }

        default: {
            throw new Error(`Unhandled action type`);
        }
    }
}
