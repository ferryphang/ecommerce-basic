import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const publishableKey = 'pk_test_neGTxXylQgqWMpyQsvBQHtzT';
  const priceForStripe = price * 100;
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      description="Your total is $${price}"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeButton;
