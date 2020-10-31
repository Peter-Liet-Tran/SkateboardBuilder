import React, { Component } from 'react';
import classes from './SkateboardBuilder.css';

import Aux from '../../hoc/ReactAux/ReactAux';
import Skateboard from '../../components/Skateboard/Skateboard';
import Cart from '../../components/Skateboard/BuildControls/Cart';
import ViewPartControls from '../../components/Skateboard/BuildControls/ViewPartControls/ViewPartControls';
import BuildDeckControls from '../../components/Skateboard/BuildControls/BuildDeckControls/BuildDeckControls';
import BuildTruckControls from '../../components/Skateboard/BuildControls/BuildTruckControls/BuildTruckControls';
import BuildWheelControls from '../../components/Skateboard/BuildControls/BuildWheelControls/BuildWheelControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Skateboard/OrderSummary/OrderSummary';

class SkateboardBuilder extends Component {
    state = {
        deckColor: '#242320',
        wheelColor: 'black',
        truckColor: "#898989",

        totalPrice: 60.00,

        deckPrice: 20.00,
        wheelPrice: 20.00,
        truckPrice: 20.00,
        
        deckShow: true,
        wheelsShow: false,
        trucksShow: false
    }

    changeDeckHandler = ( color, price ) => {
        const oldTotal = this.state.totalPrice - this.state.deckPrice;
        this.setState({ deckColor: color, deckPrice: price});
        
        const newTotal = oldTotal + price;
        this.setState( { totalPrice: newTotal } );
    }

    changeWheelHandler = ( color, price ) => {
        const oldTotal = this.state.totalPrice - this.state.wheelPrice;
        this.setState({ wheelColor: color, wheelPrice: price});
        
        const newTotal = oldTotal + price;
        this.setState( { totalPrice: newTotal } );
    }

    changeTruckHandler = ( color, price ) => {
        const oldTotal = this.state.totalPrice - this.state.truckPrice;
        this.setState({ truckColor: color, truckPrice: price});
        
        const newTotal = oldTotal + price;
        this.setState( { totalPrice: newTotal } );
    }

    changePartHandler = ( part ) => {
        if(part == "deck")
        {
            this.setState({ deckShow: true, trucksShow: false, wheelsShow: false});
        }
        else if(part == "trucks")
        {
            this.setState({ deckShow: false, trucksShow: true, wheelsShow: false});
        }
        else if(part == "wheels")
        {
            this.setState({ deckShow: false, trucksShow: false, wheelsShow: true});
        }
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
    }

    render () {
        return (
            <Aux>
                {/*<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        deck={this.state.deckPrice}
                        wheels={this.state.wheelPrice}
                        trucks={this.state.truckPrice}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
        </Modal> */}
                <Skateboard truckColor={this.state.truckColor} wheelColor={this.state.wheelColor} deckColor={this.state.deckColor} ingredients={this.state.ingredients} />
               
                <ViewPartControls
                    partSelected={this.changePartHandler}
                />
                <BuildDeckControls
                    deckShow={this.state.deckShow}
                    deckSelected={this.changeDeckHandler}
                />
                <BuildWheelControls
                    wheelsShow={this.state.wheelsShow}
                    wheelSelected={this.changeWheelHandler}
                />
                <BuildTruckControls
                    trucksShow={this.state.trucksShow}
                    truckSelected={this.changeTruckHandler}
                />

<OrderSummary 
                        deck={this.state.deckPrice}
                        wheels={this.state.wheelPrice}
                        trucks={this.state.truckPrice}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />


                {/*<Cart
                    ordered={this.purchaseHandler}
                price={this.state.totalPrice} />   */}


            </Aux>
        );
    }
}

export default SkateboardBuilder;