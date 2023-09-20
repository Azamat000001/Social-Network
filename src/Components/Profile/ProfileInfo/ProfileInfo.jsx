import React from 'react';
import classes from'./ProfileInfo.module.css'



const ProfileInfo = () => {
    return(
      <div className={classes.content}>

        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQgoH8avXTIEdU1L0o8kA7gBlQiEiatonioQ&usqp=CAU"/>
        </div>
        <div className={classes.descriptionBlock}>
          ava + descreption
        </div>
        
      </div>
    )
}

export default ProfileInfo;