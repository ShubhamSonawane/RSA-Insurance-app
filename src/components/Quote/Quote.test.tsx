import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Quote from './Quote';
import { useStore as storeHook } from '../../hooks/hooks';
import { AppStore } from '../../store/store';

jest.mock('../../hooks/hooks', () => ({
  useStore: jest.fn().mockReturnValue({
    isAnnual: true,
    quote: {
      firstName: 'James',
      lastName: 'Kirk',
      address1: 'St Marks Court',
      address2: 'Chart Way',
      address3: '',
      town: 'Horsham',
      postcode: 'RH12 1XL',
      quoteRef: 'NBSH00044898200Q',
      startDate: '2021-07-02T13:03:54Z',
      monthlyPrice: 10,
      annualPrice: 100,
      finalPrice: 100,
      isAnnual: true,
    },
    togglePayment: jest.fn(),
  }),
}));

const useStore = storeHook as ReturnType<(typeof jest)['fn']>;
jest.mock('../../hooks/hooks');
jest.dontMock('../../store/store');

const newAppStore = () => {
  return new AppStore();
};

describe('<Quote />', () => {
  it('renders the annual price and text correctly', () => {
    const { getByText } = render(<Quote />);
    const price = getByText('£100');
    const text = getByText('per year');

    expect(price).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it('renders the monthly price and text correctly when isAnnual is false', () => {
    const { getByText } = render(<Quote />);

    const price = getByText('£100');
    const text = getByText('per year');

    expect(price).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it('calls togglePayment when the switch button is clicked', () => {
    let store = newAppStore();
    store = {
      ...store,
      addExtra: jest.fn(),
      removeExtra: jest.fn(),
      setAddons: jest.fn(),
      setQuote: jest.fn(),
      togglePayment: jest.fn(),
    };
    store.isAnnual = false;
    store.addOns = [
      {
        title: 'Add-on 1',
        annualPrice: 100,
        monthlyPrice: 10,
        text: 'This is add-on 1',
      },
      {
        title: 'Add-on 2',
        annualPrice: 200,
        monthlyPrice: 20,
        text: 'This is add-on 2',
      },
    ];
    useStore.mockReturnValue(store as any);
    const { getByText } = render(<Quote />);
    const button = getByText(/switch to annual/i);
    fireEvent.click(button);

    expect(store.togglePayment).toHaveBeenCalled();
  });
});
