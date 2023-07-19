interface Song {
  name: string;
  previewUrl: string;
  artworkUrl100: string;
  artistName: string;
  artistId: number | null;
  artistViewUrl: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionId: number | null;
  collectionName: string;
  collectionPrice: number | null;
  collectionViewUrl: string;
  country: string;
  currency: string;
  description: string;
  primaryGenreName: string;
  releaseDate: string;
  trackCount: number | null;
  wrapperType: string;
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
