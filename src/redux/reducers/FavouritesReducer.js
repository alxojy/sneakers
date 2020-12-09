const initialState = {
    favourites: []
}

const FavouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAVOURITES":
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }
        case "REMOVE_FAVOURITES": // pokemon list for current page - success
            return {
                ...state,
                favourites: state.favourites.filter(item => action.payload !== item)
            };
        default:
            return state;
    }
};

export default FavouritesReducer;