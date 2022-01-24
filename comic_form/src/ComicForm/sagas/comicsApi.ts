import { ADD_COMIC, GET_COMICS } from "../../constants/constants"
import { put, takeLatest} from 'redux-saga/effects'
import { setComics, setError, setResponse } from "../reducers/comics.reducer";
import { Comic } from "../types/Comic.types";
import axios from 'axios'
import { AnyAction } from "@reduxjs/toolkit";

// const comicsAPIUrl = process.env.COMICS_API
const comicsAPIUrl = "http://localhost:8888/comics";

function* getComicsFromAPI(){
    let comics: Comic[] = [];
    yield axios.get(comicsAPIUrl).then(function(response){
        comics = response.data;
        }).catch(function(error){
            setError(error);
        })
    yield put(setComics(comics));
}

function* addComicToApi(action: AnyAction){
    console.log('calling function to add a comic')
    const {formData} = action;
    console.log('form data:', formData);
    let responseMessage = ''; 
    let errorMessage =''; 
    yield axios.post(comicsAPIUrl,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
    ).then((response)=>{
        console.log('response', response.data.message);
        responseMessage = response.data.message
    }).catch((error)=>{
        console.log('error', error);
        errorMessage = error
    })
    yield put(setResponse(responseMessage));
    yield put(setError(errorMessage));

}

export default function* comicSagas(){
    
    yield takeLatest(GET_COMICS, getComicsFromAPI);
    yield takeLatest(ADD_COMIC, addComicToApi);
}