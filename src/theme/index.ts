import {BasePalette} from "./Palette";



export type SIZES = '12px' | '14px' | '16px' | '18px' | '20px'

export interface BaseSizes  {
    [index: string]: SIZES
}

export interface IBaseTheme {
    colors: BasePalette,
    size: BaseSizes
}

const BaseTheme: IBaseTheme = {
    colors: {
        primary: "#2E7D32",
        secondary: "#A437B6",
        thr: "#D32F2F"
    },
    size: {
        xs: "12px",
        sm:  '14px',
        base: '16px',
        lg: '18px',
        xl: '20px'
    },

}


export default BaseTheme