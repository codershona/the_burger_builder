import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';



const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>

      <NavigationItem link="/" exact>BURGER BUILDER</NavigationItem>

      { props.isAuthenticated ? <NavigationItem link="/orders">ORDERS</NavigationItem> : null}                 

      {!props.isAuthenticated 
      	? <NavigationItem link="/auth">AUTHENTICATE</NavigationItem>
      	: <NavigationItem link="/logout">LOG-OUT</NavigationItem>} 

    </ul>

);


export default navigationItems;

