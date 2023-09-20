import React from 'react';
import classes from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    const path = '/dialogs/' + props.id

    return (
        <div className={classes.dialog}>
            <img src={props.img}/><NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}



export default DialogsItem;