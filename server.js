// STRIPE BACKEND

// sk_test_51MF6qLA1869aNZSeznGoP98VUEhcgSJND818KThGiiF025rF95JjC9RfgcrtRPxho4gHnZ3h4H2EE7GLZqkF6uRt00pTfISR09

// Product API Keys 
// GA Ticket: price_1MF6w3A1869aNZSewqBrWimT
// Midnight: price_1MF6xWA1869aNZSe8Iddql1g


const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51MF6qLA1869aNZSeznGoP98VUEhcgSJND818KThGiiF025rF95JjC9RfgcrtRPxho4gHnZ3h4H2EE7GLZqkF6uRt00pTfISR09')

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

//sends post request to checkout route 
app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1, 
            quantity:3
        }   
    ]
    what stripe wants 
        [
        {
            price: 1, 
            quantity:3
        }   
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = []; // formats lineItems for how Stripe wants them  
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    //creates a payment session with lineItems created above ^
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    //sends user to stripe checkout 
    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("listening on port 4000!"));