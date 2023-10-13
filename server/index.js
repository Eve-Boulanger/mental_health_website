/* 
    Code below from https://stripe.com/docs/checkout/quickstart , 
    and https://www.unimedia.tech/stripe-checkout-integration-with-react/,
*/
// This is your test secret API key.
const stripe = require('stripe')('sk_test_51NSrCSGZIZjTCOU7qxcRFePeUeSpd4xDPGcO8IPPtPkpqwl2LuWwccTr43ocE8sxFOuNWW8CzDwrr6Dn8lpbFXjs007y50oEzv');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000/checkout';

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
        {
            // Define a product to sell
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1O0pTnGZIZjTCOU7k2jNdKIu', // Pin
            quantity: 1,
        },
        {
            price: 'price_1O0pRqGZIZjTCOU7ovF46vyW', // Patch
            quantity: 1,
        },
        {
            price: 'price_1O0pQPGZIZjTCOU7GaxVkAAr', // Hat
            quantity: 1,
        },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });

    res.redirect(303, session.url);
    });

app.listen(4242, () => console.log('Running on port 4242'));