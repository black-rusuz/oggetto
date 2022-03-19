import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
        palette: {
            primary: {
                light: '#FFED00',
                main: '#FFDD00',
                dark: '#ECB300',
                contrastText: '#000'
            }

        },
        typography: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 14,
            htmlFontSize: 14
        }
    }
)