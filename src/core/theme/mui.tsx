import {createTheme} from "@mui/material/styles";
import {Shadows} from "@mui/material/styles/shadows";

export const theme = createTheme({
        palette: {
            primary: {
                main: '#FFED00',
                dark: '#FFDD00',
                contrastText: '#000'
            },
            secondary: {
                main: '#ECB300',
                contrastText: '#000'
            },
        },
        typography: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 14,
            htmlFontSize: 14
        },
        shadows: Array(25).fill('none') as Shadows
    }
)