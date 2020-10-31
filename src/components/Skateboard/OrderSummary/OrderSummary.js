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
                <h3 className={classes.Header}>Your Order</h3>

                    <div className={classes.Pricing}>
                        <p><strong>Deck:</strong> <span className={classes.Prices}>${this.props.deck.toFixed(2)}</span></p> 

                        <p><strong>Wheels:</strong> <span className={classes.Prices}>${this.props.wheels.toFixed(2)}</span></p>

                        <p><strong>Trucks:</strong> <span className={classes.Prices}>${this.props.trucks.toFixed(2)}</span></p>


                <p className={classes.Total}><strong>Total Price:</strong> <span className={classes.Prices}>${this.props.price.toFixed( 2 )}</span></p>
                </div>
            </div>
        );
    }
}

export default OrderSummary;