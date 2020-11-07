import React from 'react';
import {Button} from 'reactstrap';
import classes from './CheckoutButton.css';

const checkoutButton = (props) => (
    <div className={classes.CheckoutWrapper}>
        <Button 
            size="lg"
            color="success"
            onClick={props.ordered}>Order Now</Button>
    </div>
);

export default checkoutButton;