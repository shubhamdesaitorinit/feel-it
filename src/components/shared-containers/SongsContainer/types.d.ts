interface Song {
  name: string;
  previewUrl: string;
  artworkUrl100: string;
}

interface SongStoreType {
  songs: Song[];
  currentSong: Song;
  songAction: {
    search: string;
    isPlaying: boolean;
  };
  searchSongs: Song[];
}

interface SongsType {
  songs: Song[];
}
