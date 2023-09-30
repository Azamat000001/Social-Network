import React from 'react';
import classes from'./Post.module.css'



const Post = (props) => {
    return(
            <div className={classes.item}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU'></img>
              { props.massege}
              <div>
                <span >like</span> { props.likesCount }
              </div>
            </div>
    )
}

export default Post;