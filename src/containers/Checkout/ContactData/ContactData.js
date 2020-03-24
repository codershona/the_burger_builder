import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';


class ContactData extends Component {
   state = {
   	name: '',
   	email: '',
   	address: {
   		street: '',
   		postalCode: ''
   	 }
   }
   render () {
   	return (
   		<div>
   		  <h4>ENTER YOUR CONTACT DATA HERE!</h4>
   		  <form>
   		    <input type="text" name="name" placeholder="Your Name" />
   		    <input type="email" name="email" placeholder="Your Mail" />
   		    <input type="text" name="street" placeholder="Street" />
   		    <input type="text" name="postal" placeholder="Postal Code" />
        
          <Button btnType="Success">ORDER HERE!</Button>

   		  </form>
   		</div>

   		);
   }
}

export default ContactData;