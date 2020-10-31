import React from 'react';

import classes from './BuildWheelControls.css';

const controls = [
    { label: 'yellow', type: '#f9ff00', price: 25.00 }, 
    { label: 'green', type: '#22cc05', price: 30.00 }, 
    { label: 'blue', type: 'blue', price: 33.00 }, 
    { label: 'pink', type: '#ff00ff', price: 35.00 }, 
    { label: 'maroon', type: '#e81313', price: 30.00 },
    { label: 'black', type: 'black', price: 20.00 }, 
];

const buildWheelControls = (props) => (
    props.wheelsShow ?

    <div>
        <div className={classes.Wheels}>
        {controls.map(ctrl => (
            <div className={classes.WheelButton}
            onClick={() => props.wheelSelected(ctrl.type, ctrl.price)}>
            <img            
            src={require("./Images/" + ctrl.label + "wheel.svg")}
            alt={ctrl.label}
            key={ctrl.label} />
            <p>${ctrl.price.toFixed(2)}</p>
            </div>
        ))}
        </div>
    </div>
    
    : null
);

export default buildWheelControls;