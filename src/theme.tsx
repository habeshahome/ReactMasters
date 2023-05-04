import {createTheme} from "@mui/material/styles"

export const theme = createTheme({
    palette: {
        primary: {
            main: '#230023'
        },
        custom: {
            main: '#8939ff'
        },
        button: {
            primary: '#230023',
            secondary: '#8939ff',
            action: {
                hover: '#8939ff',
                selected: '#8939ff',
                disabled: '#8939ff'
            }
        },
        surface: {
            main: '#230023',
            light: '#8939ff',
            dark: '#230023',
        }
    }
})