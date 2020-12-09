import { combineReducers } from "redux";
import FavouritesReducer from "./FavouritesReducer";

const RootReducer = combineReducers({
    Favourites: FavouritesReducer
});

export default RootReducer;