import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button} from 'reactstrap';
import classes from './Checkout.css';

class Checkout extends Component {
    render () {
        return (
            <div>
                <h3 className={classes.Header}>Order Summary</h3>

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
                <h3 className={classes.Header}>Information</h3>
                <Form>
                    <FormGroup>
                        <Label for="name" className={classes.LabelOrder}>
                            Name:
                            <Input type="text" name="name" onChange={this.handleChange} />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email" className={classes.LabelOrder}>
                            Email:
                            <Input type="email" name="email" onChange={this.handleChange} />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="message" className={classes.LabelOrder}>
                            Message:
                            <Input type="text" name="message" onChange={this.handleChange} />
                        </Label>
                    </FormGroup>

                <Button>Submit</Button>
                </Form>
                
            </div>
        );
    }
}

export default Checkout;