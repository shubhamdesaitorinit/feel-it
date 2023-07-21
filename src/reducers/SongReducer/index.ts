import { createSlice } from "@reduxjs/toolkit";

const initialState: SongStoreType = {
  songs: [],
  currentSong: {
    name: "",
    previewUrl: "",
    artworkUrl100: "",
    artworkUrl60: "",
    artistName: "",
    artistId: null,
    artistViewUrl: "",
    collectionCensoredName: "",
    collectionExplicitness: "",
    collectionId: null,
    collectionName: "",
    collectionPrice: null,
    collectionViewUrl: "",
    country: "",
    currency: "",
    description: "",
    primaryGenreName: "",
    releaseDate: "",
    trackCount: null,
    wrapperType: "",
  },
  songAction: {
    search: "",
    isPlaying: false,
  },
};

const { actions, reducer: songReducer } = createSlice({
  name: "song",
  initialState,
  reducers: {
    setCurrentSong(state, action) {
      state.currentSong = action.payload.currentSong;
    },
    setSongs(state, action) {
      if (!action.payload.songs?.length) {
        state.songs = action.payload.songs;
      } else {
        state.songs.push(...action.payload.songs);
      }
    },
    setPlay(state, action) {
      state.songAction.isPlaying = action.payload.isPlaying;
    },
    setSearch(state, action) {
      state.songAction.search = action.payload.search;
    },
  },
});

export const { setCurrentSong, setSongs, setPlay, setSearch } = actions;

export default songReducer;
