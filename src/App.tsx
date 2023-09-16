import React from 'react';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {NotFoundPage} from "./views/ErrorPages";
import {createTheme, CssBaseline} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';
import {lightThemeOptions} from "./themes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>HOWDY</h1>,
        errorElement: <NotFoundPage/>,
    },
]);

const theme = createTheme(lightThemeOptions);


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    );
}

export default App;
