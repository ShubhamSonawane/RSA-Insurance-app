import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { useStore as storeHook } from '../hooks/hooks';
import { AppStore } from '../store/store';

const newAppStore = () => {
  return new AppStore();
};

const useStore = storeHook as ReturnType<(typeof jest)['fn']>;
jest.mock('../hooks/hooks');
jest.dontMock('../store/store');

jest.mock('react-query', () => {
  return {
    useQuery: jest.fn().mockImplementation(() => ({
      data: [
        {
          id: 1,
          monthlyPrice: 10,
          annualPrice: 120,
        },
      ],
      isLoading: false,
    })),
  };
});

jest.mock('../hooks/hooks', () => {
  return {
    useStore: jest.fn().mockImplementation(() => ({
      isAnnual: false,
      setAddons: jest.fn(),
      setQuote: jest.fn(),
    })),
  };
});

describe('<Home />', () => {
  it('renders Home component', () => {
    const store = newAppStore();
    store.quote = {
      firstName: 'James',
      lastName: 'Kirk',
      address1: 'St Marks Court',
      address2: 'Chart Way',
      address3: '',
      town: 'Horsham',
      postcode: 'RH12 1XL',
      quoteRef: 'NBSH00044898200Q',
      startDate: '2021-07-02T13:03:54Z',
      monthlyPrice: 21.64,
      annualPrice: 259.68,
      finalPrice: 21.64,
      isAnnual: false,
    };
    useStore.mockReturnValue(store as any);
    render(<Home />);

    expect(screen.getByText(/RSA HOME INSURANCE/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Tailor your cover with our optional extra/i)
    ).toBeInTheDocument();
    expect(screen.getAllByText(/£10/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/per month/i)[0]).toBeInTheDocument();
  });

  it('calls useStore hook', () => {
    const store = newAppStore();
    store.quote = {
      firstName: 'James',
      lastName: 'Kirk',
      address1: 'St Marks Court',
      address2: 'Chart Way',
      address3: '',
      town: 'Horsham',
      postcode: 'RH12 1XL',
      quoteRef: 'NBSH00044898200Q',
      startDate: '2021-07-02T13:03:54Z',
      monthlyPrice: 21.64,
      annualPrice: 259.68,
      finalPrice: 21.64,
      isAnnual: false,
    };
    useStore.mockReturnValue(store as any);
    render(<Home />);

    expect(useStore).toHaveBeenCalledWith('AppStore');
  });
});
