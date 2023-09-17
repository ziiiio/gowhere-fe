import React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

// NOTE: mostly the same as NotFoundPage, but simpler
const GenericErrorPage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant={'h1'}>Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
      <Typography>
        <i>Looks like something is broken. :(</i>
      </Typography>
    </Container>
  );
};

export default GenericErrorPage;
