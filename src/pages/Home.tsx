/* eslint-disable no-nested-ternary */
import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import AddOns from '../components/AddOns/AddOns';
import Layout from '../components/Layout/Layout';
import Quote from '../components/Quote/Quote';
import Header from '../components/Header/Header';
import {
  ADDONS_TEXT,
  ADDONS_TEXT_ERROR,
  ADDONS_TEXT_LOADING,
} from '../constants/AppConstants';
import { Main, Title } from './Home.style';
import { useStore } from '../hooks/hooks';

const Home: FC = observer(() => {
  const store = useStore('AppStore');
  return (
    <div className="min-h-full">
      <Header content="RSA Insurance App" />
      <Main>
        <Layout>
          <Quote />
          <Title>
            {store.isLoadingAddons
              ? ADDONS_TEXT_LOADING
              : store.isErrorAddons
              ? ADDONS_TEXT_ERROR
              : ADDONS_TEXT}
          </Title>
          <AddOns />
        </Layout>
      </Main>
    </div>
  );
});

export default Home;
