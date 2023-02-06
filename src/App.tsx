import React from 'react';
import { observer } from 'mobx-react-lite';
import { QueryClientProvider, QueryClient } from 'react-query';
import Home from './pages/Home';
import { StoresProvider } from './store';
import './global.css';

const queryClient = new QueryClient();

function App() {
  return (
    <StoresProvider>
      <QueryClientProvider client={queryClient}>
        <div className="bg-slate-200 shadow-xl">
          <Home />
        </div>
      </QueryClientProvider>
    </StoresProvider>
  );
}

export default observer(App);
