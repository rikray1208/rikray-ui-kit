interface ButtonStyles {
    scaleButtonActive?: number
    buttonBorderDashed?: string
}

interface InputStyles {}
interface ToasterStyles {
    gapBetweenToasts?: number
}

export interface ComponentMap {
    Button: ButtonStyles;
    Input: InputStyles;
    Toaster: ToasterStyles;
}

export type ComponentNames = keyof ComponentMap;

export type OverrideComponents = {
    [key in keyof ComponentMap]: ComponentMap[key] & SeedMap & SizeMap & ColorMap
}

export type OverrideComponentsPartial = {
    [key in keyof ComponentMap]: ComponentMap[key] & Partial<SeedMap & SizeMap & ColorMap>
}

export interface ColorMap {
    colorHoverPrimary: string;
    colorHoverSuccess: string;
    colorHoverError: string;
    colorHoverInfo: string;
    colorHoverBase: string;
    colorHoverWarning: string;
    colorActivePrimary: string;
    colorActiveSuccess: string;
    colorActiveError: string;
    colorActiveInfo: string;
    colorActiveWarning: string;
    colorActiveBase: string;
    colorDisable: string;
    colorDisableText: string
    colorPrimaryText: string;
    colorSuccessText: string;
    colorErrorText: string;
    colorInfoText: string;
    colorWarningText: string;
    colorTextPlaceholder: string;
    colorBorderBase: string;

    colorShadowPrimary: string;
    colorShadowSuccess: string;
    colorShadowError: string;
    colorShadowInfo: string;
    colorShadowWarning: string

}

export interface SizeMap{
    'fontSize-xs': number;
    'fontSize-sm': number;
    'fontSize-base': number;
    'fontSize-lg': number;
    'fontSize-xl': number;
    'fontSize-2xl': number;
    'lineHeight-xs': number;
    'lineHeight-sm': number;
    'lineHeight-base': number;
    'lineHeight-lg': number;
    'lineHeight-xl': number;
    'lineHeight-2xl': number;

    'margin-1': number;
    'margin-1.5': number;
    'margin-2': number;
    'margin-2.5': number;
    'margin-3': number;
    'margin-4': number;
    'margin-5': number;
    'margin-6': number;

    'padding-1': number;
    'padding-1.5': number;
    'padding-2': number;
    'padding-2.5': number;
    'padding-3': number;
    'padding-4': number;
    'padding-5': number;
    'padding-6': number;
    'size-sm': string;
    'size-md': string;
    'size-lg': string;
    'size-xl': string;
    'size-2xl': string;
    'borderRadius-xs': number;
    'borderRadius-sm': number;
    'borderRadius-md': number;
    'borderRadius-lg': number;
    'borderRadius-xl': number;

}

export interface SeedMap {
    colorPrimary: string;
    colorSuccess: string;
    colorError: string;
    colorInfo: string;
    colorWarning: string;
    colorTextBase: string;
    colorBgBase: string;
    colorWhite: string
    colorBgContainer: string

    borderRadius: number;
    borderStyle: string;
    borderWidth: string;

    fontFamily: string;
    fontSize: number;
    lineHeight: number;

    zIndexBase: number;
    zIndexPopup: number

    baseSize: number;
    sizeStep: number;

    transitionEaseInOut: string;

    durationFast: number;
    durationBase: number;
    durationSlow: number;

    shadowWidthBase: number;
}

export type Theme = OverrideComponents;


export interface StyleMap {
    seed?: Partial<SeedMap>,
    size?: Partial<SizeMap>,
    color?: Partial<ColorMap>
}

export interface ThemeConfig {
    options?: StyleMap
    components?: OverrideComponentsPartial
    theme?: ThemeNames
}

export type ThemeNames = 'dark' | 'compact' | 'default';
