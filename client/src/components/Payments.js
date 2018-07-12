import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Maily"
        description="Buy to receive FIVE (5) credit point." 
        amount={500}
        token={token => this.props.tokenHandler(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="waves-effect deep-purple accent-1 btn" style={{ marginBottom: 4 }}>
          Add Credit
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
