import { action, makeObservable, observable } from 'mobx';

import { AppStore } from './store';

// eslint-disable-next-line import/prefer-default-export
export class RootStore {
  @observable
  AppStore: AppStore;

  constructor() {
    this.AppStore = new AppStore();
    makeObservable(this);
  }
}
