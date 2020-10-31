import React from 'react';

import classes from './BuildTruckControls.css';

const controls = [
    { label: 'yellow', type: '#cccc6e', price: 25.00 }, 
    { label: 'green', type: '#386d38', price: 30.00 }, 
    { label: 'blue', type: '#4242c6', price: 33.00 }, 
    { label: 'pink', type: '#d663d6', price: 35.00 }, 
    { label: 'maroon', type: '#d86161', price: 30.00 },
    { label: 'gray', type: '#898989', price: 20.00 }, 
];

const buildTruckControls = (props) => (
    props.trucksShow ?

    <div className={classes.TrucksControl}>
        <div className={classes.Trucks}>
        {controls.map(ctrl => (
            <div className={classes.TruckButton}
            onClick={() => props.truckSelected(ctrl.type, ctrl.price)}>
            <img            
            src={require("./Images/" + ctrl.label + "trucks.svg")}
            alt={ctrl.label}
            key={ctrl.label} />
            <p>${ctrl.price.toFixed(2)}</p>
            </div>
        ))}
    </div>
    </div>
    :null
);

export default buildTruckControls;