import React, { createContext, ReactNode } from 'react';

import { RootStore } from './RootStore';

let stores: RootStore;

export const StoresContext = createContext<RootStore | undefined>(undefined);
StoresContext.displayName = 'home-insurance-stores';

export const initializeStores = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
  const _stores: RootStore = stores ?? new RootStore();

  return _stores;
};
export function StoresProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const newStores = initializeStores();
  return (
    <StoresContext.Provider value={newStores}>
      {children}
    </StoresContext.Provider>
  );
}
