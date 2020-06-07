import React, { Component } from "react";
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.3,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false
    }

    updatePurchaseState = (updatedIngredients: {}) => {
        const ingredients = {
            ...updatedIngredients
        };

        const sum = Object.keys(ingredients)
            .map(igkey => {
                // @ts-ignore
                return ingredients[igkey]
            })
            .reduce((sum, ingredientValue) => {
                return sum + ingredientValue;
            }, 0);

            console.log(sum);
            this.setState({purchaseable: sum > 0});
    }

    addIngredientHandler = (type: any) => {
        // @ts-ignore
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        // @ts-ignore
        updatedIngredients[type] = updatedCount;
        // @ts-ignore
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ingredients: updatedIngredients,
        totalPrice: newPrice});

        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type: any) => {
        // @ts-ignore
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        // @ts-ignore
        updatedIngredients[type] = updatedCount;
        // @ts-ignore
        const priceSubtraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubtraction;

        this.setState({ingredients: updatedIngredients,
        totalPrice: newPrice});

        this.updatePurchaseState(updatedIngredients);
    }
    
    render() {
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo) {
            // @ts-ignore
            disableInfo[key] = disableInfo[key] <= 0
        }
        
        return(
            <>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo}
                    purchaseable={this.state.purchaseable}
                    price={this.state.totalPrice} />
            </>
        );
    }
}

export default BurgerBuilder;