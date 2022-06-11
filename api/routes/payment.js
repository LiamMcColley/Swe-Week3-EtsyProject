var express = require("express");
var router = express.Router();
var stripe = require("stripe");

var fetch = require("node-fetch");

router.post("/", async (req,res,next)=>{
    console.log(process.env.STRIPE_SECRET_KEY);
    try{
        let {amount, id} = req.body
        const stripeFr = stripe(process.env.STRIPE_SECRET_KEY);
        const payment = await stripeFr.paymentIntents.create({
            amount : 1000,
            currency:"USD",
            description:"books",
            payment_method:req.body.id,
            confirm:true
        }) 
        console.log("Payment: ", payment)
        res.json({
            message:"Payment Successful",
            success: true
        })

    }catch(err){
        console.log("Payment Error: ", err)
        res.json({
            message:"Payment Failed",
            success: false
        })
    }
}

);

module.exports = router;