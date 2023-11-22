import { createSlice, PayloadAction,  configureStore } from '@reduxjs/toolkit';

import Movie from '../models/Movie';


const initialState: Array<Movie> = [];

const favoriteSlice = createSlice({
  name: 'Favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Movie>) {
        state.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<Movie>) {
        let index: number = state.findIndex(elem => action.payload.id == elem.id ); 
        if (index > -1) {
            state.splice(index, 1);
         }
    },
},
});

const store = configureStore({
    reducer: {
      favorites: favoriteSlice.reducer,
    },
  })


export const { addFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
export {store};
