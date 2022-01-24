import { RootState } from "../../core/store";

export const getComics = (state: RootState) =>  state.comics.comics;
export const getResponse = (state: RootState) =>  state.comics.response
export const getError = (state: RootState) => state.comics.error;


