import React, { Component } from 'react';
import classes from './SkateboardBuilder.css';

import Aux from '../../hoc/ReactAux/ReactAux';
import Skateboard from '../../components/SkateboardBuilder/Skateboard/Skateboard';
import CheckoutButton from '../../components/OrderSummary/CheckoutButton';
import Checkout from '../../components/CheckoutScreen/Checkout';
import ViewPartControls from '../../components/SkateboardBuilder/BuildControls/ViewPartControls/ViewPartControls';
import BuildDeckControls from '../../components/SkateboardBuilder/BuildControls/BuildDeckControls/BuildDeckControls';
import BuildTruckControls from '../../components/SkateboardBuilder/BuildControls/BuildTruckControls/BuildTruckControls';
import BuildWheelControls from '../../components/SkateboardBuilder/BuildControls/BuildWheelControls/BuildWheelControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

class SkateboardBuilder extends Component {
    state = {
        deckColor: '#242320',
        wheelColor: 'black',
        truckColor: "#898989",

        totalPrice: 60.00,
        totalPriceColor: "black",

        deckPrice: 20.00,
        deckPriceColor: "gray",

        wheelPrice: 20.00,
        wheelPriceColor: "gray",

        truckPrice: 20.00,
        truckPriceColor: "gray",
        
        deckShow: true,
        wheelsShow: false,
        trucksShow: false
    }

    changeDeckHandler = ( color, price ) => {
        const oldTotal = this.state.totalPrice - this.state.deckPrice;
        this.setState({ deckColor: color, deckPrice: price});
        
        const newTotal = oldTotal + price;
        this.setState( { totalPrice: newTotal } );

        this.setState( { totalPriceColor: "#F96B6B", deckPriceColor: "#F96B6B" } );

        this.timer = setTimeout(_ => {
          this.setState({totalPriceColor: "black", deckPriceColor: "gray"}); // fade back in
        }, 400); // animation timing offset
    }

    changeWheelHandler = ( color, price ) => {
        const oldTotal = this.state.totalPrice - this.state.wheelPrice;
        this.setState({ wheelColor: color, wheelPrice: price});
        
        const newTotal = oldTotal + price;
        this.setState( { totalPrice: newTotal } );

        this.setState( { totalPriceColor: "#F96B6B", wheelPriceColor: "#F96B6B" } );

        this.timer = setTimeout(_ => {
          this.setState({totalPriceColor: "black", wheelPriceColor: "gray"}); // fade back in
        }, 400); // animation timing offset
    }

    changeTruckHandler = ( color, price ) => {
        const oldTotal = this.state.totalPrice - this.state.truckPrice;
        this.setState({ truckColor: color, truckPrice: price});
        
        const newTotal = oldTotal + price;
        this.setState( { totalPrice: newTotal } );

        this.setState( { totalPriceColor: "#F96B6B", truckPriceColor: "#F96B6B" } );

        this.timer = setTimeout(_ => {
          this.setState({totalPriceColor: "black", truckPriceColor: "gray"}); // fade back in
        }, 500); // animation timing offset
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
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <Checkout 
                        deck={this.state.deckPrice}
                        wheels={this.state.wheelPrice}
                        trucks={this.state.truckPrice}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal>
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
                        totalPrice={this.state.totalPrice}
                        totalPriceColor={this.state.totalPriceColor}
                        deckPriceColor={this.state.deckPriceColor}
                        wheelPriceColor={this.state.wheelPriceColor}
                        truckPriceColor={this.state.truckPriceColor}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />


                <CheckoutButton
                    ordered={this.purchaseHandler} />


            </Aux>
        );
    }
}

export default SkateboardBuilder;