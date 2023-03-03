import React from 'react';

import { MenuContext } from '../context';

export function useMenu() {
    const context = React.useContext(MenuContext);
    if (context === undefined) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
}
