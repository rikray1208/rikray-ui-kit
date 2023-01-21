import {ITheme} from "./types";

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
        }
    },
    Filter: {
        brightness: {
            darker: '85%',
            lighter: '115%'
        },
        opacity: {
            disable: '60%'
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
        hover: 'rgba(0, 0, 0, 5%)'
    },
    transitions: {
        all: 'all .1s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    rounded: {
        Rectangle: '0px',
        SemiRound: '8px',
        Round: '12px'
    },
    border: {
        outline: '1px solid #3B74F3',
        dashed: '1px dashed #3B74F3'
    }

}
export default BaseTheme
