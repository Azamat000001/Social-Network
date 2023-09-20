import React from 'react';
import classes from './../Dialogs.module.css'



const Massege = (props) => {
    return (
          <div className={classes.massege}>
            {props.message}
          </div>
    )

}



export default Massege;