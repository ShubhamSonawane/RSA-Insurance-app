import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomerInfo from './CustomerInfo';
import { AppStore } from '../../store/store';
import { useStore as storeHook } from '../../hooks/hooks';

const useStore = storeHook as ReturnType<(typeof jest)['fn']>;
jest.mock('../../hooks/hooks');
jest.dontMock('../../store/store');

const newAppStore = () => {
  return new AppStore();
};
describe('CustomerInfo', () => {
  afterEach(cleanup);

  it('should display the customer name', () => {
    const store = newAppStore();
    store.isAnnual = false;
    store.quote = {
      firstName: 'John',
      lastName: 'Kirk',
      address1: '123 Main St.',
      address2: 'London',
      address3: '',
      town: 'Horsham',
      postcode: 'RH12 1XL',
      quoteRef: '12345',
      startDate: '2023-02-05T13:03:54Z',
      monthlyPrice: 10,
      annualPrice: 100,
      finalPrice: 10,
      isAnnual: false,
    };

    useStore.mockReturnValue(store as any);
    const { getByText } = render(<CustomerInfo />);
    expect(getByText('Hey John,')).toBeInTheDocument();
  });

  it('should display the customer address', () => {
    const { getByText } = render(<CustomerInfo />);
    expect(
      getByText(
        'Here is your quote for Royal & Sun Alliance, 123 Main St., London'
      )
    ).toBeInTheDocument();
  });

  it('should display the quote reference', () => {
    const { getByText } = render(<CustomerInfo />);
    expect(getByText('Quote reference: 12345')).toBeInTheDocument();
  });

  it('should display the start date of the cover', () => {
    const { getByText } = render(<CustomerInfo />);
    expect(getByText('Cover starts on 05-Feb-2023')).toBeInTheDocument();
  });
});
