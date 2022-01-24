import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'

import { Box } from '@mui/material';

import { getComics } from '../selectors/comics.selectors';
import { GET_COMICS } from '../../constants/constants';
import { Comic } from '../types/Comic.types';

const ComicView = ()=>{
    const dispatch = useDispatch();
    const comics: Comic[] = useSelector(getComics);

    useEffect(()=>{
        dispatch({
            type: GET_COMICS
        })
    }, [dispatch]);
    console.log('comics in component', comics);
    return(
        <Box>
            <h1> Comics</h1>
            { comics.map((comic: Comic)=>(
                <Box>
                    <h2>{comic.title}({comic.year})</h2>
                    <p>Issue: {comic.issue}</p>
                    <p>Publisher: {comic.publisher}</p>
                    <p>Imprint: {comic.imprint}</p>

                    <p>{comic.releaseDate}</p>
                    <p>Cover: {comic.cover}</p>
                    <p>Author: {comic.writer}</p>
                    <p>Illustrator: {comic.artist}</p>
                    <p>Cover Illustrator: {comic.coverArtist}</p>


                    <Box
                    component="img"
                    sx={{
                    height: 400,
                    width: 150,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                    }}
                    alt='no image'
                    src={`http://localhost:8888${comic.coverImage}`}
                />

                </Box>
            ))}
        </Box>
    );
}

export default ComicView;