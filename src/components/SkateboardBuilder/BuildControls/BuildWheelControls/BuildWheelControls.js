import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle
  } from 'reactstrap';

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
            /*<div className={classes.WheelButton}
            onClick={() => props.wheelSelected(ctrl.type, ctrl.price)}>
            <img            
            src={require("./Images/" + ctrl.label + "wheel.svg")}
            alt={ctrl.label}
            key={ctrl.label} />
            <p>${ctrl.price.toFixed(2)}</p>
            </div>*/

            <Card onClick={() => props.deckSelected(ctrl.type, ctrl.price)} className={classes.WheelButton}>
                <CardImg top width="100%" src={require("./Images/" + ctrl.label + "wheel.svg")} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">${ctrl.price.toFixed(2)}</CardTitle>
                </CardBody>
            </Card>
        ))}
        </div>
    </div>
    
    : null
);

export default buildWheelControls;