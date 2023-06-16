import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from "@mui/material";

import App from './App.jsx'
import CustomThemeProvider from "./context/themeProvider";
import './assets/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CustomThemeProvider>
            <CssBaseline />
            <App />
        </CustomThemeProvider>
    </React.StrictMode>,
)
