interface Colors {
    primary: string;
    secondary: string;

    [index: string]: string;
}

interface FontSize {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    [index: string]: string;
}

interface LineHeight {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    [index: string]: string;
}

interface Margin {
    px: string;
    '0.5': string;
    '1': string;
    '1.5': string;
    '2': string;
    '2.5': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;

    [index: string]: string;
}

interface Padding {
    px: string;
    '0.5': string;
    '1': string;
    '1.5': string;
    '2': string;
    '2.5': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;

    [index: string]: string;
}

interface Rounded {
    Rectangle: string;
    SemiRound: string;
    Round: string;
}

interface Scale {
    less : string;
    greater: string
    [index: string]: string;
}

interface Transitions {
    all: string
}

interface Brightness {
    lighter: string;
    darker: string;
    [index: string]: string;
}

interface Opacity {
    disable: string
}

interface Border {
    [index: string]: string;
}
export interface ITheme {
    Typography: {
        fontSize: FontSize
        lineHeight: LineHeight
    }
    Spacing: {
        padding: Padding
        margin: Margin
    }
    Filter: {
        brightness: Brightness
        opacity: Opacity
    }

    Transform: {
        scale: Scale
    }
    transitions: Transitions
    colors: Colors
    rounded: Rounded
    border: Border
}
