import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

interface IBurgerProps {
    ingredients: any
}

const burger = (props: IBurgerProps) => {
    let transformedIngredients = 
        Object.keys(props.ingredients).map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            })
        })
        .reduce((prev: any, curr: any) => {
            return prev.concat(curr);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }    

    return (
        <div className={classes.Burger}>
            <BurgerIngredient key="bread-top1" type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient key="bread-bottom1" type="bread-bottom" />
        </div>
    );
}

export default burger;