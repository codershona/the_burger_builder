import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';



const navigationItems = () => (
    <ul className={classes.NavigationItems}>

      <NavigationItem link="/" exact>BURGER BUILDER</NavigationItem>

      <NavigationItem link="/orders">ORDERS</NavigationItem>

    </ul>

);


export default navigationItems;

