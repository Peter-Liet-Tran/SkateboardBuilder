import React, { Component } from 'react';

import classes from './Checkout.css';

class Checkout extends Component {
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
                <form>
                <label>
                    First Name:
                    <input type="text" name="firstName" />
                </label>
                <br/>
                <label>
                    Last Name:
                    <input type="text" name="LastName" />
                </label>
                <br/>
                <label>
                    Phone:
                    <input type="text" name="phone" />
                </label>
                <br/>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <br/>

                <input type="submit" value="Submit" />
                </form>
                
            </div>
        );
    }
}

export default Checkout;