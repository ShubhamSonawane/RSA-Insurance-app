export interface AddOns {
  title: string;
  text: string;
  monthlyPrice: number;
  annualPrice: number;
}

export interface CustomerQuote {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  address3: string;
  town: string;
  postcode: string;
  quoteRef: string;
  startDate: string;
  monthlyPrice: number;
  annualPrice: number;
  finalPrice: number;
  isAnnual: boolean;
}
