import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFoundPage } from './views/ErrorPages';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { lightThemeOptions } from './themes';
import MainPage from './views/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <NotFoundPage />,
  },
]);

const theme = createTheme(lightThemeOptions);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
