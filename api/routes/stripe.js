const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51L8T4uJxDa9nKf1ZPtreU59bdVLQV4kWS3tWMqQO4uZhzKYFvKMP4udodNU59HealatS80qHk6iU9k1K06jmviHY00HmLg7pM2"
);

var charge = await stripe.charges.retrieve("ch_3L8T5FJxDa9nKf1Z1H8aFfZF", {
  apiKey:
    "sk_test_51L8T4uJxDa9nKf1ZPtreU59bdVLQV4kWS3tWMqQO4uZhzKYFvKMP4udodNU59HealatS80qHk6iU9k1K06jmviHY00HmLg7pM2",
});
