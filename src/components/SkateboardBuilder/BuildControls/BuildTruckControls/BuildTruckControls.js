import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle
  } from 'reactstrap';

import classes from './BuildTruckControls.css';

const controls = [
    { label: 'yellow', type: '#cccc6e', price: 17.00 }, 
    { label: 'green', type: '#386d38', price: 20.00 }, 
    { label: 'blue', type: '#4242c6', price: 23.00 }, 
    { label: 'pink', type: '#d663d6', price: 15.00 }, 
    { label: 'maroon', type: '#d86161', price: 12.00 },
    { label: 'gray', type: '#898989', price: 10.00 }, 
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
            /*
            <Card onClick={() => props.truckSelected(ctrl.type, ctrl.price)} className={classes.TruckButton}>
                <CardImg top width="100%" src={require("./Images/" + ctrl.label + "trucks.svg")} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">${ctrl.price.toFixed(2)}</CardTitle>
                </CardBody>
            </Card>*/
        ))}
    </div>
    </div>
    :null
);

export default buildTruckControls;