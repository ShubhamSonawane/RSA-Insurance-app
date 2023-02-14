import { useQuery } from 'react-query';

import { AddOns } from '../contentTypes/contentTypes';

import { getAddOns } from '../lib/api';

const useAddOns = () => {
  const {
    data: addons,
    isLoading: isAddOnsLoading,
    isError: isAddOnsError,
    error: errorAddOns,
  } = useQuery<AddOns[]>('addons', getAddOns);

  return {
    addons,
    isAddOnsLoading,
    isAddOnsError,
    errorAddOns,
  };
};

export default useAddOns;
