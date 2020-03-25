import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';


class ContactData extends Component {
   state = {
   	name: '',
   	email: '',
   	address: {
   		street: '',
   		postalCode: ''
   	 },
       loading: false
   }



   orderHandler = (event) => {
      event.preventDefault();
      // console.log(this.props.ingredients);
    
    this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Lisa Aktar',
        address: {
          street: 'TestStreet 1',
          zipCode: '41352',
          country: 'Germany'
        },
        email: 'lisaaktar399@gmail.com' 

      },
      deliveryMethod: 'fatest'
    }

     axios.post('/orders.json', order)
     .then( response => {
        this.setState({ loading: false });
     } )
     .catch( error => {
        this.setState({ loading: false });
     } );

   }

   render () {
   	return (
   		<div className={classes.ContactData}>
   		  <h4>ENTER YOUR CONTACT DATA HERE!</h4>
   		  <form>
   		    <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
   		    <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
   		    <input className={classes.Input} type="text" name="street" placeholder="Street" />
   		    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
        
          <Button btnType="Success" clicked={this.orderHandler}>ORDER HERE!</Button>

   		  </form>
   		</div>

   		);
   }
}

export default ContactData;