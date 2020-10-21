import React, { useState } from 'react';
import './styles.scss';
import StripeCheckout from "react-stripe-checkout"

function Subscribe() { 

const[product, setProduct] = useState({
  name: "Ezcema Guru Services",
  price: 30,
  productBy: "EzcemaGuru"
});

const makePayment = token => {
  const body = {
    token,
    product
  };
  const headers = {
    "Content-Type": "application/json"
  };

  return fetch(`http://localhost:8282/payment`, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  })
    .then(response => {
      console.log("RESPONSE ", response)
      const { status } = response;
      console.log("STATUS ", status)
    })
    .catch(error => console.log(error));
  

};



    return(
       
       <div>
        <h1>
          Subscription Page
        </h1>
        <StripeCheckout 
        stripeKey="pk_test_51HdglCIiJoZbD0sLYY2Yw8uryaImmNp8RURTyWZUXtv2D3ONtkIrVxtF6E5wnbtEeEJFoZm411ZglYSQRA25RDvU00Sbs3f1Ug"
        token={makePayment}
        name="Ezcema Insider"
        amount={product.price * 100}>
        </StripeCheckout>
      </div>
    )
  }
  


export default Subscribe;
