import {ComponentMap, SeedMap} from "../types";

export const defaultSeed: SeedMap = {
    colorPrimary: '#3B74F3',
    colorSuccess: '#198754',
    colorError: '#ff0e0e',
    colorInfo: 'rgba(244,244,245,0.6)',
    colorWarning: '#ffcc00',
    colorTextBase: '#000',
    colorBgBase: '#3B74F3',
    colorWhite: '#fff',
    colorBgContainer: '#fff',

    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: '1px',

    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    fontSize: 16,
    lineHeight: 1.5,
    fontWeightBold: 600,

    zIndexBase: 0,
    zIndexPopup: 1000,

    baseSize: 8,
    sizeStep: 2.5,

    transitionEaseInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

    durationFast: 100,
    durationBase: 200,
    durationSlow: 300,

    shadowWidthBase: 2,
    boxShadowBase: 'rgba(100, 100, 111, 0.2) 0 7px 29px 0',
}

export const defaultComponents: ComponentMap = {
    Card: {},
    Button: {
        scaleButtonActive: 0.95,
        buttonBorderDashed: 'dashed'
    },
    Input: {},
    Toaster: {
        gapBetweenToasts: 12
    },
}
