import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddOns from './AddOns';
import { AppStore } from '../../store/store';

import { useStore as storeHook } from '../../hooks/hooks';

const useStore = storeHook as ReturnType<(typeof jest)['fn']>;
jest.mock('../../hooks/hooks');
jest.dontMock('../../store/store');

const newAppStore = () => {
  return new AppStore();
};

describe('AddOns', () => {
  const store = newAppStore();
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
  it('renders the add-ons and buttons correctly', () => {
    const { getByText, getAllByText } = render(<AddOns />);

    const addOn1 = getByText('Add-on 1');
    const addOn2 = getByText('Add-on 2');
    const addOn1Price = getByText('£10 per month');
    const addOn2Price = getByText('£20 per month');
    const selectButton1 = getAllByText('Select this extra')[0];
    const selectButton2 = getAllByText('Select this extra')[1];

    expect(addOn1).toBeInTheDocument();
    expect(addOn2).toBeInTheDocument();
    expect(addOn1Price).toBeInTheDocument();
    expect(addOn2Price).toBeInTheDocument();
    expect(selectButton1).toBeInTheDocument();
    expect(selectButton2).toBeInTheDocument();
  });

  it('calls the addExtra and removeExtra functions correctly', () => {
    let store = newAppStore();
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
    store.selectedAddOns = [
      {
        title: 'Add-on 2',
        annualPrice: 200,
        monthlyPrice: 20,
        text: 'This is add-on 2',
      },
    ];
    store = {
      ...store,
      addExtra: jest.fn(),
      removeExtra: jest.fn(),
      setAddons: jest.fn(),
      setQuote: jest.fn(),
      togglePayment: jest.fn(),
    };
    useStore.mockReturnValue(store as any);
    const { getAllByText } = render(<AddOns />);

    const selectButton1 = getAllByText('Select this extra')[0];
    fireEvent.click(selectButton1);

    expect(store.addExtra).toHaveBeenCalledWith({
      title: 'Add-on 1',
      annualPrice: 100,
      monthlyPrice: 10,
      text: 'This is add-on 1',
    });

    const removeButton1 = getAllByText('Remove this extra')[0];
    fireEvent.click(removeButton1);

    expect(store.removeExtra).toHaveBeenCalledWith({
      title: 'Add-on 2',
      annualPrice: 200,
      monthlyPrice: 20,
      text: 'This is add-on 2',
    });
  });
});
