import axios from "axios";

export const getSongs = async (
  term?: string,
  offset?: number,
  limit?: number
) => {
  try {
    const songs = await axios(
      `https://itunes.apple.com/search/?term=${
        term ? `${term}&` : "${term}&"
      }offset=${offset}&limit=${limit || 10}`
    );
    if (songs.data) {
      return { data: songs?.data?.results || [], error: null };
    }
  } catch (error: any) {
    return { data: null, error: error?.message || "Failed to get sogs" };
  }
};

export const refineSongsData = (data: any) => {
  const songsList: Song[] = [];
  for (const song of data) {
    if (!song.previewUrl) {
      continue;
    }
    const refinedSong = {
      artistName: song.artistName,
      previewUrl: song.previewUrl,
      collectionName: song.collectionName,
      trackTimeMillis: song.trackTimeMillis,
      artworkUrl100: song.artworkUrl100,
    };
    songsList.push(refinedSong);
  }
  return songsList;
};
