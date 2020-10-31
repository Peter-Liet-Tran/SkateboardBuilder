import React from 'react';

import classes from './ViewPartControls.css';


const viewPartControls = (props) => (
    <div className={classes.PartsControl}>
        <button onClick={() => props.partSelected("deck")}>Deck</button>
        <button onClick={() => props.partSelected("wheels")}>Wheels</button>
        <button onClick={() => props.partSelected("trucks")}>Trucks</button>
    </div>
);

export default viewPartControls;