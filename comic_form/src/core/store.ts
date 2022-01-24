import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'

//import reducers
import {comicSlice} from '../ComicForm/reducers/comics.reducer'

//import sagas
import comicSagas from '../ComicForm/sagas/comicsApi'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  comics: comicSlice.reducer,
})
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(comicSagas);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
