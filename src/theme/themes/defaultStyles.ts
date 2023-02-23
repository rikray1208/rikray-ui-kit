import { ComponentMap, SeedMap } from '../types';

export const defaultSeed: SeedMap = {
    colorPrimary: '#3B74F3',
    colorSuccess: '#00AB66',
    colorError: '#ff0e0e',
    colorInfo: '#f4f4f599',
    colorWarning: '#ffcc00',
    colorTextBase: '#000000',
    colorBgBase: '#3B74F3',
    colorWhite: '#ffffff',
    colorBgContainer: '#ffffff',
    colorBgSecondary: '#dedede',
    colorOverlay: 'rgba(0, 0, 0, 0.45)',

    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: '1px',

    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    fontSize: 16,
    lineHeight: 1.5,
    fontWeightBold: 500,
    fontWeightLight: 300,

    zIndexBase: 0,
    zIndexPopup: 1000,

    baseSize: 8,
    sizeStep: 2.5,

    transitionEaseInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

    durationFast: 100,
    durationBase: 200,
    durationSlow: 400,

    shadowWidthBase: 2,
    boxShadowBase: 'rgba(100, 100, 111, 0.2) 0 7px 29px 0',
    boxShadowPopup: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
};

export const defaultComponents: ComponentMap = {
    Card: {},
    Button: {
        scaleButtonActive: 0.92,
        buttonBorderDashed: 'dashed',
    },
    Toaster: {
        gapBetweenToasts: 12,
    },
    Input: {},
    Select: {
        maxHeight: 250,
    },
    Modal: {
        defaultWidth: 500,
        screenMargin: 20,
    },
    Step: {
        descriptionWidth: 200,
        descriptionVerticalWidth: 350,
    },
    Accordion: {},
    Divider: {},
    Global: {},
};
