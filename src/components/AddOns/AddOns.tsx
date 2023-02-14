import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Button from '../Button/Button';
import { useStore } from '../../hooks/hooks';
import useAddOns from '../../hooks/useAddOns';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { Container, DescriptionText } from './AddOns.style';
import { PER_MONTH, PER_YEAR, POUND } from '../../constants/AppConstants';

const AddOns: FC = observer(() => {
  const store = useStore('AppStore');

  const { addons, isAddOnsError, isAddOnsLoading, errorAddOns } = useAddOns();

  useEffect(() => {
    if (addons) {
      store.setAddons(addons);
    }
  }, [addons, store]);

  useEffect(() => {
    store.isLoadingAddons = isAddOnsLoading;
  }, [isAddOnsLoading, store]);

  useEffect(() => {
    store.isErrorAddons = isAddOnsError;
  }, [isAddOnsError, store]);

  if (isAddOnsLoading) {
    return <Loading />;
  }

  if (isAddOnsError) {
    return <Error errorMessage={errorAddOns} />;
  }

  return (
    <Container>
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
                <div className="text-lg font-bold mt-0 col-span-2">
                  {item.title}
                </div>
                {store.isAnnual ? (
                  <DescriptionText>
                    <span className="float-right">
                      {POUND}
                      {item.annualPrice} {PER_YEAR}
                    </span>
                  </DescriptionText>
                ) : (
                  <DescriptionText>
                    <span className="float-right">
                      {POUND}
                      {item.monthlyPrice} {PER_MONTH}
                    </span>
                  </DescriptionText>
                )}
              </div>
              <div className="mt-8">
                <DescriptionText> {item.text}</DescriptionText>
              </div>
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
    </Container>
  );
});

export default AddOns;
