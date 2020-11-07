import React from 'react';
import { Form, FormGroup, Input, Label, Button} from 'reactstrap';
import classes from './CheckoutButton.css';

const checkoutButton = (props) => (
    <div className={classes.CheckoutWrapper}>
        <Button 
            size="lg"
            color="primary"
            onClick={props.ordered}>Order Now</Button>
    </div>
);

export default checkoutButton;