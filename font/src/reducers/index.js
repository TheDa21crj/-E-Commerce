import toggleNav from "./toggleNav";
import incWish from "./addwish";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    toggleNav,
    incWish,
});

export default rootReducer;