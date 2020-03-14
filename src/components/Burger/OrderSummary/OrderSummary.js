import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
	.map(igKey => {
		return (
			<li key={igKey}>
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

    <button>CANCEL PLEASE</button>
    <button>CONTINUE HERE</button>

   	   </Aux>

   	);
};


export default orderSummary;