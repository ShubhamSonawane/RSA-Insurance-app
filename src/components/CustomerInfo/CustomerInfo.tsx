import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import moment from 'moment';
import { useStore } from '../../hooks/hooks';

const CustomerInfo: FC = observer(() => {
  const store = useStore('AppStore');

  return (
    <div className="pb-10">
      <div className="text-3xl font-semibold">Hey {store.quote.firstName},</div>
      <div className="text-sm mt-8">
        Here is your quote for Royal & Sun Alliance, {store.quote.address1},{' '}
        {store.quote.address2}
      </div>
      <div className="text-sm my-4">
        Quote reference: {store.quote.quoteRef}
      </div>
      <div className="text-sm my-4">
        Cover starts on{' '}
        {moment(store.quote.startDate).utc().format('DD-MMM-YYYY')}
      </div>
    </div>
  );
});

export default CustomerInfo;
