import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

// TODO: prettify this with css
const NotFoundPage = () => {
  const error = useRouteError();

  const errorText = isRouteErrorResponse(error)
    ? error.statusText
    : 'Page Not Found';

  return (
    <Container maxWidth="md">
      <Typography variant={'h1'}>Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
      <Typography>
        <i>{errorText}</i>
      </Typography>
    </Container>
  );
};

export default NotFoundPage;
