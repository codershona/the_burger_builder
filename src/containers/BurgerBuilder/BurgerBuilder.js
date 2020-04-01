import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';



const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7 
};

class BurgerBuilder extends Component {
  
  // constructor(props) {
  //  super(props);
  //   this.state = {...}
  // }

	state = {

        totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: false

  }

    // ingredients: null,
    // ingredients: {
     
    //  salad: 0,
    //  bacon: 0,
    //  cheese: 0,
    //  meat: 0

    //   },

  
  // }


  componentDidMount () {
     console.log(this.props);

    // axios.get('https://the-burger-builder-9bfe3.firebaseio.com/ingredients.json')
    // .then(response => {
    //   this.setState({ingredients: response.data});


    // })
    //   .catch(error => {
    //     this.setState({error: true})
    //   });

  }

  updatePurchaseState (ingredients) {
   const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
       return sum + el;
      }, 0);
    this.setState({purchasable: sum > 0});


  }

  addIngredientHandler = (type) => {
 const oldCount = this.state.ingredients[type];
 const updatedCount = oldCount + 1;
 const updatedIngredients = {
   ...this.state.ingredients

    };

    updatedIngredients[type] = updatedCount;
   const priceAddition = INGREDIENT_PRICES[type]
   const oldPrice = this.state.totalPrice;
   const newPrice = oldPrice + priceAddition;
   this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
   this.updatePurchaseState(updatedIngredients);

  }

  removeIngredientHandler = (type) => {

    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
 const updatedCount = oldCount - 1;
 const updatedIngredients = {
   ...this.state.ingredients

    };

    updatedIngredients[type] = updatedCount;
   const priceDeduction = INGREDIENT_PRICES[type]
   const oldPrice = this.state.totalPrice;
   const newPrice = oldPrice - priceDeduction;
   this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
   this.updatePurchaseState(updatedIngredients);
  
  }

  purchaseHandler = () => {
   this.setState({purchasing: true});
 }

 purchaseCancelHandler = () => {
    this.setState({purchasing: false});
 }

 purchaseContinueHandler = () => {
  // alert('You Continue!');
  //setting backend data
    //   this.setState({ loading: true });

    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: 'Lisa Aktar',
    //     address: {
    //       street: 'TestStreet 1',
    //       zipCode: '41352',
    //       country: 'Germany'
    //     },
    //     email: 'lisaaktar399@gmail.com' 

    //   },
    //   deliveryMethod: 'fatest'
    // }

    //  axios.post('/orders.json', order)
    //  .then( response => {
    //     this.setState({ loading: false, purchasing: false });
    //  } )
    //  .catch( error => {
    //     this.setState({ loading: false, purchasing: false });
    //  } );

    // this.props.history.push('/checkout');

    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));


    }

    queryParams.push('price=' + this.state.totalPrice);



    const queryString = queryParams.join('&');

    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
     
 }
    
    render () {
      const disabledInfo = {
        ...this.state.ings
      };
      for ( let key in disabledInfo ) {
        disabledInfo[key] = disabledInfo[key] <= 0
      }

      let orderSummary = null;

      let burger = this.state.error ? <p>Ingredients cannot be loaded!</p> : <Spinner />;


      if ( this.props.ings ) {
        burger =  (
        <Aux>
        <Burger ingredients={this.props.ings} />
       
        <BuildControls 
           ingredientAdded={this.props.onIngredientAdded} 
           ingredientRemoved={this.props.onIngredientRemoved} 
           disabled={disabledInfo}
           purchasable={this.state.purchasable}
           ordered={this.purchaseHandler}
           price={this.state.totalPrice}
           />

           </Aux>

           );

            orderSummary = <OrderSummary 
                ingredients={this.props.ings} 
                price={this.state.totalPrice}
               purchaseCancelled={this.purchaseCancelHandler}
               purchaseContinued={this.purchaseContinueHandler}
                />;

      }

      if (this.state.loading) {
           orderSummary = <Spinner />;
      }

       

      // {salad: true, meat: false, ...}
    	return (
  
          <Aux>

          <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
            {orderSummary} 
          </Modal>
           {burger}
      
     </Aux>
  
      );
    }
}

const mapStateToProps = state => {
  return {
     ings: state.ingredients


  };
}


const mapDispathToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
    onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})

   }
}





export default connect(mapStateToProps, mapDispathToProps)(withErrorHandler( BurgerBuilder, axios ));
