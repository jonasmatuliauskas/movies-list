import React, { useState, useRef, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import { CardMedia, Grid, Typography, IconButton } from '@material-ui/core';

import CustomBox from '../../components/CustomBox'
import Loading from '../../components/Loading'
import Message from '../../components/Message'
import useStyles from './style'
import * as actions from '../../store/actions/index';


const HomePage = (props) => {
    const classes = useStyles();

    const [pageNumber, setPageNumber] = useState(1)
    const [titleSort, setTitleSort] = useState('asc')
    const dispatch = useDispatch();
    const data = useSelector(state => state.movies);

    const loadMovies = useCallback(
        (pageNumber, titleSort) => dispatch(actions.fetchMovies(pageNumber, titleSort)),
        [dispatch]
      );
    
    useEffect(() => {
        loadMovies(pageNumber, titleSort);
    }, [loadMovies, pageNumber, titleSort]);

    const observer = useRef()
    const lastMovieElementRef = useCallback(node => {
        if (data.loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && data.hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [data.loading, data.hasMore])

    const handleTitleSort = () => {
        dispatch(actions.cleanMovies());
        setPageNumber(1)
        setTitleSort(prevSort => prevSort === 'asc' ? 'desc' : 'asc')
    }

    console.log(data.movies)

    return (
        <>
            <CustomBox display="flex" justifyContent="center">
                <IconButton onClick={handleTitleSort}>
                    <SortByAlphaIcon fontSize="large"/>
                </IconButton>
            </CustomBox>
            {data.movies.map((movie, index) => {
            return (
                <Grid key={movie.id} ref={data.movies.length === index + 1 ? lastMovieElementRef : null} container spacing={3}>
                    <Grid item className={classes.mediaBox}  xs={6}>
                        <CardMedia
                        component="img"
                        className={classes.mediaImage}
                        image={movie.image}
                        title={movie.title}
                        alt={movie.title}
                        />
                    </Grid>
                    <Grid item xs={6} className={`${classes.control} ${classes.mediaTitle}`}>
                        <Typography variant="h4">
                        {movie.title}
                        </Typography>
                    </Grid>
                </Grid>
            )})}
            {(data.loading && 
                <Loading />
            )}
            {(data.error && 
                <Message type="error">
                    ERROR
                </Message>
            )}
            {(!data.loading && !data.error && !data.hasMore && 
                <Message type="info">
                    The end
                </Message>
            )}
        </>
    )
}

export default HomePage;