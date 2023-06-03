import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
   //ustawienie do theme
});

export default function CustomThemeProvider({ children }) {
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

