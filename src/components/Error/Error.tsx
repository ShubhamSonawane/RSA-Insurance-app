/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  ERROR_FOR_LOCALHOST,
  TYPESCRIPT_FAILED_TO_FETCH,
} from '../../constants/AppConstants';
import { ErrorContainer, ErrorMessage, ErrorTitle } from './Error.style';

function Error(error: any) {
  return (
    <ErrorContainer>
      <ErrorTitle>Error</ErrorTitle>
      <ErrorMessage>
        {error.errorMessage.message === TYPESCRIPT_FAILED_TO_FETCH
          ? ERROR_FOR_LOCALHOST
          : error.errorMessage.message}
      </ErrorMessage>
    </ErrorContainer>
  );
}

export default Error;
