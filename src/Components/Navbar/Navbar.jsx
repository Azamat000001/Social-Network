import React from 'react';
import classes from'./Navbar.module.css'
import { NavLink } from 'react-router-dom';
import { activeClassName } from 'react-router-dom'



const Navbar = () => {
    return(
      <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to='/Profile' activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/Dialogs' activeClassName={classes.activeLink}>Dialogs</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/News' activeClassName={classes.activeLink}>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/Music' activeClassName={classes.activeLink}>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/Sittings' activeClassName={classes.activeLink}>Settings</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/Spinner' activeClassName={classes.activeLink}>Spinner</NavLink>
        </div>
        <div className={classes.item}>
          <bestFriends/>
        </div>
      </nav>
    )
}

export default Navbar;