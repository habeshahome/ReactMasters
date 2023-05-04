export {}

declare module '@mui/material/styles' { 
    interface Palette {
        custom: Palette['primary'];
        button: {
            primary: string;
            secondary: string;
            action: {
                hover: string;
                selected: string;
                disabled: string;
            }
        },
        surface: Palette['primary'];
    }

    interface PaletteOptions {
        custom: PaletteOptions['primary'];
        button: {
            primary: string;
            secondary: string;
            action: {
                hover: string;
                selected: string;
                disabled: string;
            }
        },
        surface: PaletteOptions['primary'];
    }

    interface ButtonPropsColorOverrides {
        custom: PaletteOptions['primary'];
        button: {
            primary: string;
            secondary: string;
            action: {
                hover: string;
                selected: string;
                disabled: string;
            }
        },
        surface: PaletteOptions['primary'];
    }
}