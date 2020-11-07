import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle
  } from 'reactstrap';

import classes from './BuildDeckControls.css';

const controls = [
    { label: 'yellow', type: '#ede437', price: 25.00 }, //#008000
    { label: 'green', type: 'green', price: 30.00 }, //#008000
    { label: 'blue', type: '#11229e', price: 33.00 },
    { label: 'pink', type: 'pink', price: 35.00 }, //#FFC0CB
    { label: 'maroon', type: '#942018', price: 28.00 },
    { label: 'black', type: '#242320', price: 20.00 }, 
];

const buildDeckControls = (props) => (
    props.deckShow ?

    <div className={classes.DeckControl}>
        <div className={classes.Decks}>
        {controls.map(ctrl => (
            <div className={classes.DeckButton}
            onClick={() => props.deckSelected(ctrl.type, ctrl.price)}>
            <img            
            src={require("./Images/" + ctrl.label + "deck.svg")}
            alt={ctrl.label}
            key={ctrl.label} />
            <p>${ctrl.price.toFixed(2)}</p>
        </div>
        /*
        <Card onClick={() => props.deckSelected(ctrl.type, ctrl.price)} className={classes.DeckButton}>
            <CardImg top width="100%" src={require("./Images/" + ctrl.label + "deck.svg")} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">${ctrl.price.toFixed(2)}</CardTitle>
            </CardBody>
        </Card>*/
        ))}
        </div>
    </div>
    :null
);

export default buildDeckControls;