import { useQuery } from 'react-query';

import { CustomerQuote } from '../contentTypes/contentTypes';

import { getQuote } from '../lib/api';

const useQuote = () => {
  const {
    data: quotes,
    isLoading: isQuotesLoading,
    isError: isQuotesError,
    error: errorQuote,
  } = useQuery<CustomerQuote[]>('quotes', getQuote);

  return {
    quotes,
    isQuotesError,
    isQuotesLoading,
    errorQuote,
  };
};

export default useQuote;
