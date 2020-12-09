export const addFavourites = (item) => async dispatch => {
    dispatch({
        type: "ADD_FAVOURITES",
        payload: item
    })
}

export const removeFavourites = (item) => async dispatch => {
    dispatch({
        type: "REMOVE_FAVOURITES",
        payload: item
    })
}
