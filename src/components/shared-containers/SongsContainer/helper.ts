import axios from "axios";
import { DEFAULT_SONG_REQUEST_LIMIT } from "@constants/index";

export const getSongs = async (
  search?: string,
  offset?: number,
  limit?: number
) => {
  console.log("innercall", offset);
  try {
    const url = `https://itunes.apple.com/search/?term=${
      search || `term`
    }&offset=${search ? "" : offset}&limit=${
      limit || DEFAULT_SONG_REQUEST_LIMIT
    }`;

    const songs = await axios(url);
    if (songs.data) {
      return { data: songs?.data?.results || [], error: null };
    }
  } catch (error: any) {
    return { data: null, error: error?.message || "Failed to get sogs" };
  }
};

export const refineSongsData = (data: any) => {
  if (!data?.length) return [];

  const songsList: Song[] = [];

  for (const song of data) {
    if (!song?.previewUrl) {
      continue;
    }
    const refinedSong = {
      name: song?.collectionName || "",
      artistName: song?.artistName || "",
      previewUrl: song?.previewUrl || "",
      image: song?.artworkUrl100 || "",
      artistId: song?.artistId || "",
    };

    songsList.push(refinedSong);
  }
  return songsList;
};
