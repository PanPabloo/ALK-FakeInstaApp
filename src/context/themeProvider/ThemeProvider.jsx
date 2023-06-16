import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme();

theme = createTheme(theme,{
    breakpoints: {
        values: {
            xs: 0,
            sm: 470,
            md: 768,
            lg: 1024,
            xl: 1536,
        },
    },
    
    components: {
        'MuiIconButton': {
            styleOverrides: {
                root: {
                    color: theme.palette.text.primary
                }
            }
        }
    }

    
});

export default function CustomThemeProvider({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

