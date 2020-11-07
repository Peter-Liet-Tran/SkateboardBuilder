import React, { Component } from 'react';
import emailjs from "emailjs-com";

import classes from './Checkout.css';


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_h1s3xxg', e.target, 'user_piQ5M43yD1zaZSBRB9jGj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
}

class Checkout extends Component {
    render () {
        return (
            <div className={classes.OrderControl}>
                <h3 className={classes.Header}>Your Order</h3>

                <table>
                    <thead>
                    <tr className={classes.tabletitle}>
                        <td><h2>Part</h2></td>
                        <td><h2>Price</h2></td>
                    </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                    <tfoot>
                    <tr className={classes.tabletitle}>
                        <td className={classes.Total}><h2>Total:</h2></td>
                        <td><h2>${this.props.price.toFixed(2)}</h2></td>
                    </tr>
                    </tfoot>

                </table>
                <br/>
                <form onSubmit={sendEmail}>
                <label className={classes.LabelOrder}>
                    First Name:
                    <input type="text" name="name" />
                </label>
                <br/>
                <br/>
                <label className={classes.LabelOrder}>
                    Subject:
                    <input type="text" name="subject" />
                </label>
                <br/>
                <label className={classes.LabelOrder}>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label className={classes.LabelOrder}>
                    Message:
                    <input type="text" name="message" />
                </label>
                <br/>

                <input className={classes.SubmitButton} type="submit" value="Submit" />
                </form>
                
            </div>
        );
    }
}

export default Checkout;