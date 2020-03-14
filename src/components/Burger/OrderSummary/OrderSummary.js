import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
	.map(igKey => {
		return (
			<li>
			<span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
			</li>);
	});
	


   return (
   	<Aux>
        <h3> YOUR ORDER Place here </h3>
        <p>A delicious burger with the following yummy ingredients: </p>
        <ul>
         {ingredientSummary}
        </ul>

    <p> CONTINUE TO CHECKOUT? </p>

   	   </Aux>

   	);
};


export default orderSummary;