import { AddOns, CustomerQuote } from '../contentTypes/contentTypes';

export const BASE_URL = 'http://localhost:3000';

export const getQuote = async (): Promise<CustomerQuote[]> => {
  return fetch(`${BASE_URL}/quote`)
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error);
    });
};

export const getAddOns = async (): Promise<AddOns[]> => {
  return fetch(`${BASE_URL}/addons`)
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error);
    });
};
