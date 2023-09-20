import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from'./Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
 
  

    return(
      <div className={classes.content}>

        <ProfileInfo/>
        <MyPosts
          posts={ props.profilePage.posts } 
          dispatch={ props.dispatch } 
          newPostText={ props.profilePage.newPostText }
        />

      </div>
    )
}

export default Profile;