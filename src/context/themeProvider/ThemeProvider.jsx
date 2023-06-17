import { createTheme, ThemeProvider } from '@mui/material/styles';

const baseTheme = createTheme();

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 470,
            md: 768,
            lg: 1024,
            xl: 1270
        },
    },
    palette: {
        fakeInstaColor: '#dc2525'
    },
        components: {
            'MuiIconButton': {
                styleOverrides: {
                    root: {
                        color: baseTheme.palette.text.primary
                    }
                }
            }
        }
})

export default function CustomThemeProvider({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

