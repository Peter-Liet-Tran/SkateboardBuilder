import React from 'react';

import classes from './Cart.css';

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p className={classes.Price}>Current Price: $<strong>{props.price.toFixed(2)}</strong></p>
        <button 
            className={classes.OrderButton}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;