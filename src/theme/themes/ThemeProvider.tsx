import React, {FC, PropsWithChildren} from 'react';
import {Theme, ThemeConfig} from "../types";
import {createTheme} from "./createTheme";
import {ThemeProvider as Provider} from "styled-components";
import {GlobalStyle} from "./globalStyle";

interface ThemeProviderProps {
    config?: ThemeConfig
}
const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({children, config}) => {

    const theme: Theme = createTheme(config?.theme ? config.theme : 'default', config?.options, config?.components)

    return (
        <Provider theme={theme}>
            <GlobalStyle/>
            {children}
        </Provider>
    );
};

export default ThemeProvider;
