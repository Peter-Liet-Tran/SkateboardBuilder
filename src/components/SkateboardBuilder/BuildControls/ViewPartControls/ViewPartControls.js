import React from 'react';
import {Button} from 'reactstrap';
import classes from './ViewPartControls.css';


const viewPartControls = (props) => (
    <div className={classes.PartsControl}>
        <Button color="secondary" onClick={() => props.partSelected("deck")}>Deck</Button>
        <Button color="secondary" onClick={() => props.partSelected("wheels")}>Wheels</Button>
        <Button color="secondary" onClick={() => props.partSelected("trucks")}>Trucks</Button>
    </div>
);

export default viewPartControls;