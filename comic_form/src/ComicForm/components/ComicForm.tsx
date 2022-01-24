import React, { useReducer, useState } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector} from 'react-redux'
import { ADD_COMIC } from "../../constants/constants";
import { getError, getResponse } from "../selectors/comics.selectors";
import { ComicFormData, ComicFileData } from "../types/Comic.types";

const ComicForm = ()=>{
    const dispatch = useDispatch(); 
    const error = useSelector(getError); 
    const response = useSelector(getResponse); 

    const formReducer = (state: ComicFormData, event: {name: string, value: string | number}) => {
        return {
          ...state,
          [event.name]: event.value
        }
    }

    
    const emptyComicFileData: ComicFileData = {coverImage: []}; 
    const emptyComficFormData: ComicFormData = {id: '', title: "", issue: "", character: "", series: "", 
publisher: "", imprint: "", releaseDate: "", year: 0, cover: "", writer: "", coverArtist: "", artist: "", quantity: 0};
    const [formData, setFormData] = useReducer(formReducer, emptyComficFormData);
    const [fileData, setFileData] = useState(emptyComicFileData);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log('Submitting');
        //create formData
        const data = new FormData(); 
        console.log('Formdata', formData);
        console.log('title:', formData.title);
        data.append('title', formData.title)
        data.append('issue', formData.issue)
        data.append('publisher', formData.publisher)
        data.append('imprint', formData.imprint)
        data.append('character', formData.character)
        data.append('series', formData.series)
        data.append('year', formData.year.toString())
        data.append('releaseData', formData.releaseDate)
        data.append('cover', formData.cover)
        data.append('writer', formData.writer)
        data.append('artist', formData.artist)
        data.append('coverArtist', formData.coverArtist)
        data.append('quantity', formData.quantity.toString())
        data.append('coverImage', fileData.coverImage[0])

        console.log('data', data);

        dispatch({
            type: ADD_COMIC,
            formData: data,
        })
        console.log('Done submitting?');
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            name: event.target.name,
            value: event.target.value
        })
    }
    const handleFile = (event: React.ChangeEvent<HTMLInputElement>)=>{
        let files = event.target.files;
        let fileList: File[] = []; 
        if(files){
            for (let i = 0; i < files.length; i++) {
                fileList.push(files!!.item(i)!!);
            }
        }

        setFileData({
            coverImage: fileList
        })
    }
    
    return(
        <Box>
            <h1>Add a comic</h1>
            <form id='sourceForm' encType='multipart/form-data' onSubmit={handleSubmit}>
                <label>
                    <p>Title</p>
                    <input name='title' onChange={handleChange}/><br />
                </label>
                <label>
                    <p>Issue</p>
                    <input name='issue' onChange={handleChange}/><br />
                </label>
                <label>
                    <p>Publisher</p>
                    <input name='publisher' onChange={handleChange}/><br />
                </label>
                <label>
                    <p>Imprint</p>
                    <input name='imprint' onChange={handleChange}/><br />
                </label>
                <label>
                    <p>Character</p>
                    <input name='character' onChange={handleChange}/><br />
                </label>
                <label>
                    <p>Series</p>
                    <input name='series' onChange={handleChange}/><br />
                </label>
                <label>
                    <p>Year</p>
                    <input name='year' onChange={handleChange}/><br />
                </label>
                <label>
                    <p>Release Date</p>
                    <input type='date' name='releaseData' onChange={handleChange}/><br />
                </label>
                <label>
                    <p>Cover</p>
                    <input name='cover' onChange={handleChange}/><br />
                </label>
                <label>
                    <p>Author</p>
                    <input name='author' onChange={handleChange}/><br />
                </label>
                <label>
                    <p>Illustrator</p>
                    <input name='artist' onChange={handleChange}/><br />
                </label>
                <label>
                    <p>Cover Illustrator</p>
                    <input name='coverArtist' onChange={handleChange}/><br />
                </label>
                <label>
                    <p>Cover Image</p>
                    <input type='file' name='coverImage' onChange={handleFile}/><br />
                </label>
                <label>
                    <p>Quantity</p>
                    <input name='quantity' onChange={handleChange}/><br />
                </label>
                <button type='submit'>Add Comic</button>
            </form>
        { formData && (
            
            <div>
            <p>Form Data</p>
            <ul>
            {Object.entries(formData).map((curr)=>(
                <li>{curr[0]}: {curr[1]}</li>
            )
            )}
            </ul>
        </div>
        )}
        {fileData && (
            <div>
            <p>Files</p>
            <ul>
                    <div>
                    {fileData.coverImage.length > 0 && (
                    <li>
                        Cover Image: {fileData.coverImage[0].name}  
                    </li>
                    )}

                    </div>
            </ul>
            </div>
        )}
        {response  &&(
            <p>{response}</p>
        )}
        {error &&(
            <p>{error}</p>
        )}
        </Box>

    )
}

export default ComicForm; 