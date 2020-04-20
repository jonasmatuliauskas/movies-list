import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const cleanMoviesStart = () => {
    return {
        type: actionTypes.CLEAN_MOVIES_START,
    }
}

export const fetchMoviesSuccess = (movies) => {
    return {
        type: actionTypes.FETCH_MOVIES_SUCCESS,
        movies: movies
    }
}

export const fetchMoviesFailed = (error) => {
    return {
        type: actionTypes.FETCH_MOVIES_FAILED,
        error: error
    }
}

export const fetchMoviesStart = () => {
    return {
        type: actionTypes.FETCH_MOVIES_START
    }
}

export const fetchMovies = (pageNumber, titleSort) => {
    return dispatch => {
        dispatch(fetchMoviesStart());
        axios.get(`/movies?pageNumber=${pageNumber}&sort=${titleSort}`)
            .then(res => {
                const data = res.data.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    image: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`
                }))
                dispatch(fetchMoviesSuccess(data, titleSort))
            })
            .catch(err => {
                dispatch(fetchMoviesFailed(err))
            })
    }
}

export const cleanMovies = () => {
    return dispatch => {
        dispatch(cleanMoviesStart())
    }
}