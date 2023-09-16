import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

// TODO: prettify this with css
const ErrorPage = () => {
  const error = useRouteError();

  const errorText = isRouteErrorResponse(error)
    ? error.statusText
    : 'Page Not Found';

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorText}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
