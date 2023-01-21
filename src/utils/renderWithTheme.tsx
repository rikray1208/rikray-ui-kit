import {render} from "@testing-library/react";
import React from "react";
import {ITheme} from "../theme/types";
import {ThemeProvider} from "./styled-components";

export const renderWithTheme = (component: React.ReactNode, theme: ITheme) => {
    return render(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    )
}
