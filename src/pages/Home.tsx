import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useQuery } from 'react-query';
import AddOn from '../components/AddOns/AddOns';
import { getAddOns, getQuote } from '../lib/api';
import { AddOns, CustomerQuote } from '../contentTypes/contentTypes';
import { useStore } from '../hooks/hooks';
import Layout from '../components/Layout/Layout';
import CustomerInfo from '../components/CustomerInfo/CustomerInfo';
import Quote from '../components/Quote/Quote';
import Loading from '../components/Loading/Loading';
import Error from '../components/Error/Error';

const Home: FC = observer(() => {
  const store = useStore('AppStore');

  const {
    data: quotes,
    isLoading: isQuotesLoading,
    isError: isQuotesError,
    error: errorQuote,
  } = useQuery<CustomerQuote[]>('quotes', getQuote);
  const {
    data: addons,
    isLoading: isAddOnsLoading,
    isError: isAddOnsError,
    error: errorAddOns,
  } = useQuery<AddOns[]>('addons', getAddOns);

  useEffect(() => {
    if (addons) {
      store.setAddons(addons);
    }
    if (quotes as CustomerQuote[]) {
      const quote: CustomerQuote = {
        ...(quotes as CustomerQuote[])[0],
        finalPrice: quotes?.[0].monthlyPrice as number,
        isAnnual: store.isAnnual,
      };
      store.setQuote(quote);
    }
  }, [addons, quotes, store]);

  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            RSA HOME INSURANCE
          </h1>
        </div>
      </header>
      <main>
        <Layout>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
            {isQuotesLoading ? (
              <Loading />
            ) : (
              <>
                <CustomerInfo />
                <Quote />
              </>
            )}
            {isQuotesError ? (
              <Error errorMessage={errorQuote as string} />
            ) : (
              <>
                <CustomerInfo />
                <Quote />
              </>
            )}
          </div>
          <div className="text-3xl font-semibold mb-6 mt-10">
            Tailor your cover with our optional extra
          </div>
          {isAddOnsLoading ? <Loading /> : <AddOn />}
          {isAddOnsError ? (
            <Error errorMessage={errorAddOns as string} />
          ) : (
            <AddOn />
          )}
        </Layout>
      </main>
    </div>
  );
});

export default Home;
