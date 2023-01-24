interface Colors {
    primary: string
    secondary: string
    warning: string
    error: string

    [index: string]: string
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

interface Spacing {
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

interface Positions {
    0: string,
    px: string
    1: string
    2: string
    3: string
    4: string
    [index: string]: string;
}

interface Transitions {
    all: string
    toast: string
    input: string
}

interface Brightness {
    lighter: string;
    darker: string;
    [index: string]: string;
}

interface Opacity {
    disable: string
    placeholder: string
}

interface Border {
    [index: string]: string;
}

interface Shadow {
    base: string
    sm: string
}
export interface ITheme {
    Typography: {
        fontSize: FontSize
        lineHeight: LineHeight
    }
    Spacing: {
        padding: Spacing
        margin: Spacing
        gap: Spacing
    }
    Filter: {
        brightness: Brightness
        opacity: Opacity
        dropShadow: Shadow
    }
    Transform: {
        scale: Scale
    }
    Position: {
        top: Positions
        bottom: Positions
        left: Positions
        right: Positions
        center: string

    }

    transitions: Transitions
    colors: Colors
    rounded: Rounded
    border: Border
}
