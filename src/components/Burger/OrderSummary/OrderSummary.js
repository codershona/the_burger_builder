import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // this could be a functional component , does not have to be a class

  componentWillUpdate() {
    console.log('[OrderSummary] WillUpdate');
  }


  render () {
  const ingredientSummary = Object.keys(this.props.ingredients)
  .map(igKey => {
    return (
      <li key={igKey}>
      <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
      </li> );
  } );
  


    return (
        <Aux>
        <h3> YOUR ORDER Place here </h3>
        <p>A delicious burger with the following yummy ingredients: </p>
        <ul>
         {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>

    <p> CONTINUE TO CHECKOUT? </p>

    <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL PLEASE</Button>
    <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE HERE</Button>

       </Aux>
       );
  }

}

export default OrderSummary;