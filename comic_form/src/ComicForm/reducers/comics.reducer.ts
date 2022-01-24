import {createSlice} from '@reduxjs/toolkit'
import { Comic } from '../types/Comic.types';

interface ComicState {
    comics: Comic[],
    response?: string,
    error?: string,
};

const initialState: ComicState = {
    comics: [],
    response: '',
    error: 'No error',
};

export const comicSlice = createSlice({
    name: 'comics',
    initialState,
    reducers: {
        setComics: (state, action)=>{
            console.log('Pyalod in reducer', action.payload);
            state.comics = action.payload
        },
        setResponse: (state, action)=>{
            state.response = action.payload;
        },
        setError: (state, action)=>{
            state.error = action.payload
        }
    }
})

export const { setComics, setResponse, setError} = comicSlice.actions;

export default comicSlice.reducer;

