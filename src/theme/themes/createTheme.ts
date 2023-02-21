import {
    OverrideComponents,
    SeedMap,
    SizeMap,
    StyleMap,
    ColorMap,
    Theme,
    ComponentNames,
    ThemeNames,
    OverrideComponentsPartial
} from "../types";
import {genColors} from "../../utils/genColors";

import dark from "./dark";
import compact from "./compact";
import {defaultComponents, defaultSeed} from "./defaultStyles";

type ThemePresets = {
    [key in ThemeNames]: StyleMap;
}

export function genSizeStyles (seed: SeedMap, options: Partial<SizeMap>): SizeMap {
    const sizeUnit = 10;
    const fontUnit = 16;

    const baseSize = seed.baseSize / sizeUnit;
    const sizeStep = seed.sizeStep / sizeUnit;

    const size: SizeMap = {
        "borderRadius-lg": 12,
        "borderRadius-md": 10,
        "borderRadius-sm": 8,
        "borderRadius-xl": 6,
        "borderRadius-xs": 4,
        "margin-1": baseSize - sizeStep * 2,
        "margin-1.5": baseSize - sizeStep - sizeStep / 2,
        "margin-2": baseSize - sizeStep,
        "margin-2.5": baseSize - sizeStep / 2,
        "margin-3": baseSize,
        "margin-4": baseSize + sizeStep,
        "margin-5": baseSize + sizeStep * 2,
        "margin-6": baseSize + sizeStep * 3,
        "padding-1": baseSize - sizeStep * 2,
        "padding-1.5": baseSize - sizeStep - sizeStep / 2,
        "padding-2": baseSize - sizeStep,
        "padding-2.5": baseSize - sizeStep / 2,
        "padding-3": baseSize,
        "padding-4": baseSize + sizeStep,
        "padding-5": baseSize + sizeStep * 2,
        "padding-6": baseSize + sizeStep * 3,
        "size-2xl": "",
        "size-lg": "",
        "size-md": "",
        "size-sm": "",
        "size-xl": "",
        "fontSize-2xl": (seed.fontSize / fontUnit) + 0.375,
        "fontSize-xl": (seed.fontSize / fontUnit) + 0.250,
        "fontSize-lg": (seed.fontSize / fontUnit) + 0.125,
        "fontSize-base": (seed.fontSize / fontUnit),
        "fontSize-sm":(seed.fontSize / fontUnit) - 0.125,
        "fontSize-xs": (seed.fontSize / fontUnit) - 0.250,
        "lineHeight-2xl": seed.lineHeight + 0.750,
        "lineHeight-xl": seed.lineHeight + 0.500,
        "lineHeight-lg": seed.lineHeight + 0.250,
        "lineHeight-base": seed.lineHeight,
        "lineHeight-sm": seed.lineHeight - 0.250,
        "lineHeight-xs": seed.lineHeight - 0.500,
        screenMaxSm: 640,
        screenMaxMd: 768,
        screenMaxLg: 1024,
        screenMaxXl: 1280,
    }

    return {
        ...size,
        ...options
    }
}

export function genColorStyles(seed: SeedMap, options: Partial<ColorMap>): ColorMap {
    const color: ColorMap = {
        colorActiveBase: genColors(seed.colorBgBase, -0.2),
        colorActiveError: genColors(seed.colorError, -0.2),
        colorActiveInfo: genColors(seed.colorInfo, -0.2),
        colorActivePrimary: genColors(seed.colorPrimary, -0.2),
        colorActiveSuccess: genColors(seed.colorSuccess, -0.2),
        colorActiveWarning: genColors(seed.colorWarning, -0.2),
        colorDisable: "rgba(0, 0, 0, 0.12)",
        colorDisableText: "rgba(0, 0, 0, 0.25)",
        colorHoverBase: '#f5f5f5',
        colorHoverError: genColors(seed.colorError, 8),
        colorHoverInfo: genColors(seed.colorInfo, 8),
        colorHoverPrimary: genColors(seed.colorPrimary, 8),
        colorHoverSuccess: genColors(seed.colorSuccess, 8),
        colorHoverWarning:  genColors(seed.colorWarning, 8),
        colorErrorText: seed.colorError,
        colorInfoText: seed.colorInfo,
        colorPrimaryText: seed.colorPrimary,
        colorSuccessText: seed.colorSuccess,
        colorWarningText: seed.colorWarning,
        colorTextSecondary: "rgba(0, 0, 0, 0.70)",
        colorTextTertiary: "rgba(0, 0, 0, 0.50)",
        colorTextPlaceholder: "rgba(0, 0, 0, 0.25)",
        colorBorderBase: '#d2d3d9', //d2d3d9 // e6e9ee - old
        colorShadowError: seed.colorError + '20',
        colorShadowInfo: seed.colorInfo + '20',
        colorShadowPrimary: seed.colorPrimary + '20',
        colorShadowSuccess: seed.colorSuccess + '20',
        colorShadowWarning: seed.colorWarning + '20',
    }

    return {
        ...color,
        ...options
    }
}

const componentKeys: ComponentNames[] = ["Button", "Input", "Toaster", "Card", "Select", "Modal", "Step", 'Accordion' ,"Global"]
function genComponents(
    seed: SeedMap,
    color: ColorMap,
    size: SizeMap,
    options?: OverrideComponentsPartial
): OverrideComponents {
    const components: OverrideComponents = {} as OverrideComponents;
    componentKeys.forEach(el =>
        components[el] = {
            ...seed,
            ...size,
            ...color,
            ...defaultComponents[el],
            ...options?.[el]
        }
    )

    return components;
}

const themePresets: ThemePresets = {
    dark: {
        seed: dark.seedMap
    },
    compact: {
        seed: compact.seedMap,
        size: compact.sizeMap
    },
    default: {}
}

export function createTheme(
    themeName: ThemeNames,
    options?: StyleMap,
    compOptions?: OverrideComponentsPartial
): Theme {

    const seed: SeedMap = {
        ...defaultSeed,
        ...themePresets?.[themeName].seed,
        ...options?.seed
    }

    const size: SizeMap = genSizeStyles(seed, {...themePresets?.[themeName].size, ...options?.size});
    const color: ColorMap = genColorStyles(seed, {...themePresets?.[themeName].color, ...options?.color});

    const components: OverrideComponents = genComponents(seed, color, size, compOptions);

    return {
        ...components
    }
}
