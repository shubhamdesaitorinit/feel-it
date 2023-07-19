export const DEFAULT_SONG_REQUEST_LIMIT = 15;

export const sliceText = (str: string, length?: number) => {
  if (str.length > (length || 10)) {
    return str?.slice(0, length || 10) + "...";
  } else {
    return str?.slice(0, length || 10);
  }
};
