/* eslint-disable no-nested-ternary */
import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import moment from 'moment';
import { useStore } from '../../hooks/hooks';
import Button from '../Button/Button';
import useQuote from '../../hooks/useQuote';
import { CustomerQuote } from '../../contentTypes/contentTypes';
import Loading from '../Loading/Loading';
import {
  Container,
  Content,
  StyledPriceBox,
  SubText,
  Text,
} from './Quote.style';
import Error from '../Error/Error';
import {
  COVER_STARTS_ON,
  HERE_IS_YOUR_QUOTE,
  HEY,
  NOTE,
  PER_MONTH,
  PER_YEAR,
  POUND,
  QUOTE_REFERENCE,
  SWITCH_TO_ANNUAL,
  SWITCH_TO_MONTHLY,
} from '../../constants/AppConstants';

const Quote: FC = observer(() => {
  const store = useStore('AppStore');

  const { quotes, isQuotesError, isQuotesLoading, errorQuote } = useQuote();

  useEffect(() => {
    if (quotes as CustomerQuote[]) {
      const quote: CustomerQuote = {
        ...(quotes as CustomerQuote[])[0],
        finalPrice: quotes?.[0].monthlyPrice as number,
        isAnnual: store.isAnnual,
      };
      store.setQuote(quote);
    }
  }, [quotes, store]);

  return (
    <Content>
      {isQuotesError ? (
        <Error errorMessage={errorQuote} />
      ) : isQuotesLoading ? (
        <Loading />
      ) : (
        <Container>
          <Text>
            {HEY} {store.quote.firstName},
          </Text>
          <SubText>
            {HERE_IS_YOUR_QUOTE} {store.quote.address1}, {store.quote.address2}
          </SubText>
          <SubText>
            {QUOTE_REFERENCE} {store.quote.quoteRef}
          </SubText>
          <SubText>
            {COVER_STARTS_ON}{' '}
            {moment(store.quote.startDate).utc().format('DD-MMM-YYYY')}
          </SubText>
        </Container>
      )}
      {isQuotesError ? (
        <Error errorMessage={errorQuote} />
      ) : isQuotesLoading ? (
        <Loading />
      ) : (
        <StyledPriceBox>
          {store.isAnnual ? (
            <>
              <h3>
                {POUND}
                {store.quote.finalPrice}
              </h3>
              <h4>{PER_YEAR}</h4>
            </>
          ) : (
            <>
              <h3>
                {POUND}
                {store.quote.finalPrice}
              </h3>
              <h4>{PER_MONTH}</h4>
            </>
          )}
          <span className="price-note">{NOTE}</span>
          <div className="toggle-payment">
            <Button
              text={`${store.isAnnual ? SWITCH_TO_MONTHLY : SWITCH_TO_ANNUAL}`}
              onClick={() => store.togglePayment()}
            />
          </div>
        </StyledPriceBox>
      )}
    </Content>
  );
});

export default Quote;
