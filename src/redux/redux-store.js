import { combineReducers, createStore} from "redux";
import profileReducer from "./Reducers/profileReducer";
import dialogsReducer from "./Reducers/dialogsReducer";
import sidbarReducer from "./Reducers/sidbarReducer";
import usersReducer from "./Reducers/usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidbar: sidbarReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers)

window.store = store;

export default store