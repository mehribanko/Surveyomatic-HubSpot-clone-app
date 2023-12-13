import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

// there is an action creator that posts tokens to backend api, we need to call it every time we get a token from Stripe. 
// we need to hook up our action creator to this file (with connectors and stuff)

class StripePay extends Component{
    render(){
        return(

            <StripeCheckout 
                name='Surveyomatic'
                description='$10 for 10 survey credits'
                amount={1000}
                token={token=> this.props.handleToken(token) }
                stripeKey={process.env.REACT_APP_STRIPE_KEY}

            >
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-md text-green-800 bg-amber-500 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Add Credits
            </button> 

            </StripeCheckout>

        )
    }
}



export default connect(null, actions) (StripePay);


