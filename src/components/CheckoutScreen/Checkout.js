import React, { Component } from 'react';

import classes from './Checkout.css';

class Checkout extends Component {
    render () {
        return (
            <div className={classes.OrderControl}>
                <h3 className={classes.Header}>Your Order</h3>

                <table>
                    <tr className={classes.tabletitle}>
                        <td><h2>Part</h2></td>
                        <td><h2>Price</h2></td>
                    </tr>

                    <tr className={classes.Part}>
                        <td><p>Deck</p></td>
                        <td><p>${this.props.deck.toFixed(2)}</p></td>
                    </tr>

                    <tr className={classes.Part}>
                        <td><p>Wheels</p></td>
                        <td><p>${this.props.wheels.toFixed(2)}</p></td>
                    </tr>

                    <tr className={classes.Part}>
                        <td><p>Trucks</p></td>
                        <td><p>${this.props.trucks.toFixed(2)}</p></td>
                    </tr>

                    <tr className={classes.tabletitle}>
                        <td className={classes.Total}><h2>Total:</h2></td>
                        <td><h2>${this.props.price.toFixed(2)}</h2></td>
                    </tr>

                </table>
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