import React from 'react';

import classes from './CheckoutButton.css';

const checkoutButton = (props) => (
    <div className={classes.CheckoutWrapper}>
        <button 
            className={classes.OrderButton}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default checkoutButton;