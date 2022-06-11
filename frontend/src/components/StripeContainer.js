import React from 'react'
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js" 
import PaymentForm from './PaymentForm'

function StripeContainer() {
    const PUBLIC_KEY = "pk_test_51L9WInB18j8uA8FVAX9nHsehBfBfKNg9bJvaCu1WXgfvYZ54CgqpVa1zWBKBIwt0LBfu2jpsKQj8J1e1CuUKJj9J009FMHFpK1";
    const stripeTestPromise = loadStripe(PUBLIC_KEY)
    return (
        <div>
            <Elements stripe={stripeTestPromise}>
                <PaymentForm/>
            </Elements>
        </div>
    )
}

export default StripeContainer
