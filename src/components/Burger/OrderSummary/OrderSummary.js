import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
	.map(igKey => {
		return (
			<li key={igKey}>
			<span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
			</li> );
	} );
	


   return (
   	<Aux>
        <h3> YOUR ORDER Place here </h3>
        <p>A delicious burger with the following yummy ingredients: </p>
        <ul>
         {ingredientSummary}
        </ul>
        <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>

    <p> CONTINUE TO CHECKOUT? </p>

    <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL PLEASE</Button>
    <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE HERE</Button>

   	   </Aux>

   	);
};


export default orderSummary;