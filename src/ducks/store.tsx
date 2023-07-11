import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../reducers/SongReducer";
import userReducer from "../reducers/UserReducer";

const store = configureStore({
  reducer: { user: userReducer, song: songReducer },
});

export default store;
