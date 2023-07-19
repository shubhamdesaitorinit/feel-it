interface SongModelType {
  isOpen: boolean;
  onClose: () => void;
  setSong: (song: Song) => void;
}
