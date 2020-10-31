import React, { Component } from 'react';

import Button from '../../UI/Button/Button';
import classes from './OrderSummary.css';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        return (
            <div className={classes.OrderControl}>
                <h3>Your Order</h3>


                        <p style={{ textTransform: 'capitalize' }}>Deck: {this.props.deck.toFixed(2)}</p>

                        <p style={{ textTransform: 'capitalize' }}>Wheels: {this.props.wheels.toFixed(2)}</p>

                        <p style={{ textTransform: 'capitalize' }}>Trucks: {this.props.trucks.toFixed(2)}</p>


                <p><strong>Total Price: ${this.props.price.toFixed( 2 )}</strong></p>
            </div>
        );
    }
}

export default OrderSummary;