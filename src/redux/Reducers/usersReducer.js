const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

const initialState = {
    users: [
        {id:1, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLOASmLD76pq0UPIjIJnEoCNeLa4MeiL69A&usqp=CAU", followed: false, fullName:"Azamat", status: "busy", location: {city: "Bishkek", country: "Kyrgyzstan"}},
        {id:2, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPR7AhS-xua6SDJSFFtOw16-WmqwTcaHIeJw&usqp=CAU", followed: false, fullName:"Erbol", status: "I'm boss", location: {city: "Kara-Balta", country: "Kyrgyzstan"}},
        {id:3, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXpqY-h9r7JsHVGy5kEiSL-opMRwrtlX1Gw&usqp=CAU", followed: false, fullName:"Marlen", status: "study", location: {city: "Kara-Balta", country: "Kyrgyzstan"}},
        {id:4, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnAaplmBAKb_SBhIayCNeZWSiNyDLlsDX9rw&usqp=CAU", followed: false, fullName:"Al Jami", status: "study", location: {city: "Kara-Balta", country: "Kyrgyzstan"}},
    ],
    newPostText: "Phonk"
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return { 
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return { 
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, action.users]}
        }

        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;