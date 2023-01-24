import {ITheme} from "./types";

const positions = {
    0: '0px',
    px: '1px',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75trm',
    4: '1rem',
}

const BaseTheme: ITheme = {
    Typography: {
        fontSize: {
            xs: "0.75rem",
            sm:  '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            Small: '0.875rem',
            Medium: '1rem',
            Large: '1.25rem'
        },
        lineHeight: {
            xs: "1rem",
            sm:  '1.25rem',
            base: '1.5rem',
            lg: '1.75rem',
            xl: '1.75rem',
            '2xl': '2rem',
            Small: '1.25rem',
            Medium: '1.5rem',
            Large: '1.75rem'
        }
    },
    Spacing: {
        padding: {
            px: '1px',
            "0.5": '0.125rem',
            "1": '0.25rem',
            "1.5": '0.375rem',
            "2": '0.5rem',
            "2.5": '0.625rem',
            "3": '0.75rem',
            "4": '1rem',
            "5": '1.25rem',
            "6": '1.5rem'
        },
        margin: {
            px: '1px',
            "0.5": '0.125rem',
            "1": '0.25rem',
            "1.5": '0.375rem',
            "2": '0.5rem',
            "2.5": '0.625rem',
            "3": '0.75rem',
            "4": '1rem',
            "5": '1.25rem',
            "6": '1.5rem'
        },
        gap: {
            px: '1px',
            "0.5": '0.125rem',
            "1": '0.25rem',
            "1.5": '0.375rem',
            "2": '0.5rem',
            "2.5": '0.625rem',
            "3": '0.75rem',
            "4": '1rem',
            "5": '1.25rem',
            "6": '1.5rem'
        }
    },
    Position: {
        top: positions,
        bottom: positions,
        left: positions,
        right: positions,
        center: '50%'
    },

    Filter: {
        brightness: {
            darker: '85%',
            lighter: '115%'
        },
        opacity: {
            disable: '60%',
            placeholder: '40%'
        },
        dropShadow: {
            base: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))',
            sm: 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))'
        }
    },

    Transform: {
        scale: {
            less: '.95',
            greater: '5'
        }
    },
    colors: {
        primary: "#3B74F3",
        secondary: "#7BA1F7",
        tertiary: "#8BADF8",
        success: "#198754",
        danger: "#ff0e0e",
        warning: "#ffcc00",
        error: "#ff3333",
        neutral: 'rgb(250 250 250)',
        hover: 'rgba(0, 0, 0, 5%)',
        grey: 'rgb(209 213 219)'
    },
    transitions: {
        all: 'all .1s cubic-bezier(0.4, 0, 0.2, 1)',
        toast: 'transform 0.2s, opacity 0.4s ease',
        input: 'all .2s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    rounded: {
        Rectangle: '0px',
        SemiRound: '8px',
        Round: '12px',
    },
    border: {
        outline: '1px solid #3B74F3',
        dashed: '1px dashed #3B74F3'
    }

}
export default BaseTheme
