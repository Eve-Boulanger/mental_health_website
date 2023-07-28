import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51NSrCSGZIZjTCOU7N9QNzvxXVbXQSh4e7DFkOOGyRUDjK8qCkxWr019ZDJ1kmbC5uEkJYLCfNOFQptZK7CD7SLu700LKpvOJD6');

const StripeContext = ({ children }) => (
  <Elements stripe={stripePromise}>
    {children}
  </Elements>
);

export default StripeContext; 