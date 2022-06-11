import React, {useState} from 'react'
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import axios from "axios"

import "../App.css"

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

function PaymentForm() {
    const[success, setSuccess] = useState(false)
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card:elements.getElement(CardElement)
        })

        if(!error){
            
            try{
                const{id} = paymentMethod
                console.log(1111)
                const response = await axios.post("http://localhost:9000/payment",{
                    amount:1000,
                    id: id
                })
                console.log(1111)
                if(response.data.success){
                    console.log("Successful Payment")
                    setSuccess(true);
                }

            }catch(error){
                console.log("Error!!: "+error)
            }
        }else{
            console.log(error.message)
        }
    }
    return (
        <>
            <div className="payment--container">
            {!success?
                <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS}/>
                        </div>
                    </fieldset>
                    <button className="payment--button">Pay</button>
                </form>
                :
                <div>
                    <h2>Congrats, you bought it.</h2>
                </div>

            }
            </div>
        </>
    )
}

export default PaymentForm
