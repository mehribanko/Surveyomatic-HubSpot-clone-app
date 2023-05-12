import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

class StripePay extends Component{
    render(){
        return(

            <StripeCheckout 
                name='Surveyomatic'
                description='$10 for 10 email credits'
                amount={1000}
                token={token=> console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
        )
    }
}



export default StripePay;


