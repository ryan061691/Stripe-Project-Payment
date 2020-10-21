const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("pk_test_51HdglCIiJoZbD0sLYY2Yw8uryaImmNp8RURTyWZUXtv2D3ONtkIrVxtF6E5wnbtEeEJFoZm411ZglYSQRA25RDvU00Sbs3f1Ug")
const { v4: uuidv4 } = require('uuid');
const { resolve } = require("path");

const app = express();


//middleware 
app.use(express.json())
app.use(cors());



//routes
app.get("/", (req, res) => {
    res.send("IT WORKS")
});

app.post("/payment", (req, res) => {

    const {product, token} = req.body; 
    console.log("PRODUCT ", product);
    console.log("PRICE ", product.price);
    const idempontencyKey = uuid()

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer=> {
        stripe.charges.create({
            amount: product.price * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of ${product.name}`,
        }, {idempontencyKey})
        })
        .then(result => res. status(200).json(result))
        .catch(err => console.log(err) )
    })



//listen

app.listen(8282, () => console.log("LISTENING AT PORT 8282"));