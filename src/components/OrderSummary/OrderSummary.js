import React, { Component } from 'react';

import classes from './OrderSummary.css';

class OrderSummary extends Component {
    render () {
        return (
            <div className={classes.OrderControl}>
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
            </div>
        );
    }
}

export default OrderSummary;