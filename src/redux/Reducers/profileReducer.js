const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id:1, massege:'welcome to the boxing clube', likesCount:31},
        {id:2, massege:"It's my first project", likesCount:13},
        {id:3, massege:"frontend number one!", likesCount:113},
        {id:4, massege:"Yes yes", likesCount:13}
    ],
    newPostText: "Phonk"
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                massege: state.newPostText,
                likesCount: 0
    
            } ;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return{
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return{
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;