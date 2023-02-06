import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks/hooks';
import Button from '../Button/Button';

const Quote: FC = observer(() => {
  const store = useStore('AppStore');

  return (
    <div className="bg-white shadow border rounded-sm">
      {store.isAnnual ? (
        <>
          <div className="text-5xl font-normal mt-4 text-center ">
            £{store.quote.finalPrice}
          </div>
          <div className="text-2xl font-normal text-center ">per year</div>
        </>
      ) : (
        <>
          <div className="text-5xl font-normal mt-4 text-center ">
            £{store.quote.finalPrice}
          </div>
          <div className="text-2xl font-normal text-center ">per month</div>
        </>
      )}
      <div className="flex justify-center mt-5 w-auto">
        <span className=" text-sm text-center w-4/6">
          This price includes Insurance Premium Tax at the current rate. No
          charge for paying monthly.
        </span>
      </div>
      <div className="flex justify-center my-5 w-auto">
        <Button
          text={`${store.isAnnual ? 'Switch to monthly' : 'Switch to annual'}`}
          onClick={() => store.togglePayment()}
        />
      </div>
    </div>
  );
});

export default Quote;
