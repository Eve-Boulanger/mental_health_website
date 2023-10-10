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
            price: 'price_1NzoXZGZIZjTCOU7EXYU9TkX',
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

// old strip server stuff
/*const express = require('express')

const bodyparser = require('body-parser')

const stripe = require('stripe')("sk_test_51NSrCSGZIZjTCOU7qxcRFePeUeSpd4xDPGcO8IPPtPkpqwl2LuWwccTr43ocE8sxFOuNWW8CzDwrr6Dn8lpbFXjs007y50oEzv");

const uuid = require('uuid').v4

const cors = require('cors')

const app = express()

app.use(cors())

app.use(bodyparser.urlencoded({ extended: false }))

app.use(bodyparser.json())

const PORT = 4242

app.get('/test', async (req, res) => {
    res.json({ message: "Hello from server!" });
})

//Post Request
app.post('/checkout', async (req, res) => {
    console.log("Request", req.body)

    let error, status

    try {
        const { product, token } = req.body
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })

        const key = uuid()

        const charge = await stripe.charges.create({
            amount: product.price * 100,
            currency: "cad",
            customer: customer.id,
            receipt_email: token.email,
            description: 'Purchased the ${product.name}',
            shipping: {
                name: token.card.name,
                address: {
                    line1: token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip,
                },
            },
        },
        {
            key,
        }
        );

        console.log("Charge:", { charge });
        status = "success";

    } catch (error) {
        console.log(error)
        status = "failure";
    }

    res.json({ error, status });
})

app.listen(PORT, () => {
    console.log("App is listening on port 4242")
})*/