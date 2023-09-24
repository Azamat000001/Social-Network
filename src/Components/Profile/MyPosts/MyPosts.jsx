import React from 'react';
import classes from'./MyPosts.module.css'
import Post from './Post/Post';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer';



const MyPosts = (props) => {
   

    let postsElement = props.posts.map(p =>   <Post massege={p.massege} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
      props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
      let text = newPostElement.current.value;
      // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
      let action = updateNewPostTextActionCreator(text);
      props.dispatch(action);
    }



    return(
     
        <div className={classes.postBlock}>
          <h3>My posts</h3>
          <div>
            <div>
              <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText }/>
            </div>
            <div>
              <button onClick={ addPost }>Add Post</button>
            </div>
            
          </div>
          <div className={classes.posts}>
             { postsElement }
          </div>
        </div>
      
    )
}

export default MyPosts;