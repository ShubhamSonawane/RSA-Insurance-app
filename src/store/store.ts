// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { action, makeAutoObservable, observable } from 'mobx';
import { AddOns, CustomerQuote } from '../contentTypes/contentTypes';

// export const addOnsApi = createApi({
//     reducerPath: 'insuranceApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
//     tagTypes: ['AddOns', 'Quotes'],
//     endpoints: (builder) => ({
//         getAddOns: builder.query<AddOns[], void>({
//             query: () => 'addons',
//             providesTags: [{ type: 'AddOns', id: 'LIST' }],
//         }),
//         getQuotes: builder.query<CustomerQuote[], void>({
//             query: () => 'quote',
//             providesTags: [{ type: 'Quotes', id: 'LIST' }],
//         }),
//     }),
// });

export class AppStore {
  @observable
  quote: CustomerQuote = {
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    address3: '',
    town: '',
    postcode: '',
    quoteRef: '',
    startDate: '',
    monthlyPrice: 0,
    annualPrice: 0,
    finalPrice: 0,
    isAnnual: false,
  };

  @observable
  addOns: AddOns[] = [];

  @observable
  selectedAddOns: AddOns[] = [];

  @observable
  isAnnual = false;

  @observable
  isLoadingAddons = false;

  @observable
  isErrorAddons = false;

  constructor() {
    makeAutoObservable(
      this,
      {
        quote: observable,
        addOns: observable,
        selectedAddOns: observable,
      },
      { autoBind: true }
    );
  }

  @action
  addExtra(addOn: AddOns) {
    this.selectedAddOns = [...this.selectedAddOns, addOn];
    this.calculatePrice();
  }

  @action
  removeExtra(addOn: AddOns) {
    this.selectedAddOns = this.selectedAddOns.filter(
      (selectedExtra) => selectedExtra.title !== addOn.title
    );
    this.calculatePrice();
  }

  @action
  setAddons(addOns: AddOns[]) {
    this.addOns = addOns;
  }

  @action
  setQuote(quote: CustomerQuote) {
    this.quote = quote;
  }

  @action
  togglePayment() {
    this.isAnnual = !this.isAnnual;
    this.calculatePrice();
  }

  calculatePrice = () => {
    if (this.isAnnual) {
      let price = this.quote.annualPrice;
      if (this.selectedAddOns.length > 0) {
        price = this.selectedAddOns.reduce(
          (sum, item) => sum + item.annualPrice,
          price
        );
      }
      const quote = {
        ...this.quote,
        finalPrice: Number(price.toFixed(2)),
        isAnnual: this.isAnnual,
      };
      this.setQuote(quote);
    } else {
      let price = this.quote.monthlyPrice;
      if (this.selectedAddOns.length > 0) {
        price = this.selectedAddOns.reduce(
          (sum, item) => sum + item.monthlyPrice,
          price
        );
      }
      const quote = {
        ...this.quote,
        finalPrice: Number(price.toFixed(2)),
        isAnnual: this.isAnnual,
      };
      this.setQuote(quote);
    }
  };
}

const store = new AppStore();
export default store;
