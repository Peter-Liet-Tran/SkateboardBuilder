import React from 'react';

import classes from './Skateboard.css';
import Part from './Part/Part';

const Skateboard = ( props ) => {
        return (
            <div className={classes.SkateboardWrapper}>
                    <div className={classes.full}>
                    <Part type="deck" deckColor={props.deckColor} />
                    <Part type="trucks" truckColor={props.truckColor} />
                    <Part type="wheels" wheelColor={props.wheelColor} />
                </div>
            </div>
        );
};

export default Skateboard;