import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_TITLE } from "../const";

const initialState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TITLE.favorites) || '[]')

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite(state, action) {
      const id = action.payload.id;

      if (!state.includes(id)) {
        state.push(id);
      }

      localStorage.setItem(LOCAL_STORAGE_TITLE.favorites, JSON.stringify(state))
    },

    removeFromFavorite(state, action) {
      const id = action.payload.id;
      const index = state.indexOf(id);

      if (index != -1) {
        state.splice(index, 1);
      }

      localStorage.setItem(LOCAL_STORAGE_TITLE.favorites, JSON.stringify(state))
    },
  }
});

export const { addToFavorite, removeFromFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
