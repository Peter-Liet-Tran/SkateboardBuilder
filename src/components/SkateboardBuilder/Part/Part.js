import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Part.css';

class Part extends Component {
    render () {
        let part = null;

        switch ( this.props.type ) {
            case ( 'deck' ):
                part = <div className={classes.shape}>
                    <div style={{background: this.props.deckColor}} className={classes.tail}></div>
                    <div style={{background: this.props.deckColor}} className={classes.middle}></div>
                    <div style={{background: this.props.deckColor}} className={classes.nose}></div>
                    </div>;
                break;
            case ( 'trucks' ):
                part =  <div className={classes.trucks}>
                <div className={classes.screws}>
                  <div>
                    <div className={classes.centralscrew}></div>
                    <div className={classes.centralscrew}></div>        
                  </div>
                  
                  <div>
                    <div className={classes.bushings}></div>
                    <div className={classes.bushings}></div>
                  </div>
                  
                  <div className={classes.s1}></div>
                  <div className={classes.s2}></div>
                  <div className={classes.s3}></div>
                  <div className={classes.s4}></div>
                  <div className={classes.s5}></div>
                  <div className={classes.s6}></div>
                  <div className={classes.s7}></div>
                  <div className={classes.s8}></div>
                </div>
              
                <div>
                  <div className={classes.base}></div>
                  <div className={classes.base}></div>
                </div>
              
                <div>
                  <div style={{background: this.props.truckColor}} className={classes.metal}></div>
                  <div style={{background: this.props.truckColor}} className={classes.metal}></div>
                </div>
            </div>;
                break;
            case ( 'wheels' ):
                part = <div className={classes.wheels}>
                <div style={{background: this.props.wheelColor}} className={classes.w1}>
                    <div className={classes.spin}></div>
                </div>
                <div style={{background: this.props.wheelColor}}  className={classes.w2}>
                    <div className={classes.spin}></div>
                </div>      
                <div style={{background: this.props.wheelColor}}  className={classes.w3}>
                    <div className={classes.spin}></div>
                </div>      
                <div style={{background: this.props.wheelColor}}  className={classes.w4}>
                    <div className={classes.spin}></div>
                </div>      
            
            <div className={classes.ws1}></div>
            <div className={classes.ws2}></div>
            <div className={classes.ws3}></div>
            <div className={classes.ws4}></div>
          </div>  
                break;
            default:
                part = <div>test</div>;
        }

        return part;
    }
}

Part.propTypes = {
    type: PropTypes.string.isRequired
};

export default Part;