interface Song {
  artistName: string;
  previewUrl: string;
  collectionName: string;
  trackTimeMillis: number;
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
