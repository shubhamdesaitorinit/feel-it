interface Song {
  name: string;
  previewUrl: string;
  image: string;
  artistName: string;
  artistId: string;
}

interface SongStoreType {
  songs: Song[];
  currentSong: Song;
  songAction: {
    search: string;
    isPlaying: boolean;
  };
}

interface SongsType {
  songs: Song[];
}
