import * as actionTypes from '../actions/actionTypes';

const initialState = {
    movies: [],
    loading: false,
    hasMore: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_MOVIES_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: [
                    ...state.movies,
                    ...action.movies
                ],
                loading: false,
                hasMore: action.movies.length > 0
            }
        case actionTypes.FETCH_MOVIES_FAILED:
            return {
                ...state,
                loading: false,
                hasMore: false
            }
        case actionTypes.CLEAN_MOVIES_START:
            return {
                ...state,
                movies: []
            }
        default: 
            return state;
    }
}

export default reducer;