import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Button from '../Button/Button';
import { useStore } from '../../hooks/hooks';

const AddOns: FC = observer(() => {
  const store = useStore('AppStore');
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
      {store.addOns?.map((item) => {
        return (
          <div
            className={`${
              store.selectedAddOns.some((extra) => extra.title === item.title)
                ? 'bg-green-200 rounded-lg border-4 border-dashed border-green-600'
                : 'bg-white rounded-sm'
            } shadow p-5`}
            key={item.title + item.monthlyPrice}
          >
            <div key={item.title + item.monthlyPrice}>
              <div className="grid grid-cols-3">
                <div className="text-lg font-semibold mt-2 col-span-2">
                  {item.title}
                </div>
                {store.isAnnual ? (
                  <div className="text-sm mt-3">
                    <span className="float-right">
                      £{item.annualPrice} per year
                    </span>
                  </div>
                ) : (
                  <div className="text-sm mt-3">
                    <span className="float-right">
                      £{item.monthlyPrice} per month
                    </span>
                  </div>
                )}
              </div>
              <div className="text-sm mt-2">{item.text}</div>

              <div className="mt-4 flex float-right">
                {store.selectedAddOns.some(
                  (extra) => extra.title === item.title
                ) ? (
                  <Button
                    text="Remove this extra"
                    onClick={() => store.removeExtra(item)}
                  />
                ) : (
                  <Button
                    text="Select this extra"
                    onClick={() => store.addExtra(item)}
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default AddOns;
