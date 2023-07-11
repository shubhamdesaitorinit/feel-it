import { createSlice } from "@reduxjs/toolkit";

const initialState: SongStoreType = {
  songs: [],
  currentSong: {
    artistName: "",
    previewUrl: "",
    collectionName: "",
    trackTimeMillis: 0,
    artworkUrl100: "",
  },
  songAction: {
    search: "",
    isPlaying: false,
  },
  searchSongs: [],
};

const { actions, reducer: songReducer } = createSlice({
  name: "song",
  initialState,
  reducers: {
    setCurrentSong(state, action) {
      state.currentSong = action.payload.currentSong;
    },
    setSongs(state, action) {
      state.songs.push(...action.payload.songs);
    },
    setPlay(state, action) {
      state.songAction.isPlaying = action.payload.isPlaying;
    },
    setSerchedSong(state, action) {
      state.searchSongs = action.payload.searchSongs;
    },
    setSearch(state, action) {
      state.songAction.search = action.payload.search;
    },
  },
});

export const { setCurrentSong, setSongs, setPlay, setSerchedSong, setSearch } =
  actions;

export default songReducer;
