import axios from "axios";
import { DEFAULT_SONG_REQUEST_LIMIT } from "@constants/index";

export const getSongs = async (
  search?: string,
  offset?: number,
  limit?: number
) => {
  console.log("innerApicall", search, offset, limit);
  try {
    const url = `https://itunes.apple.com/search/?term=${
      search || `alan walker`
    }&offset=${search ? "" : offset}&limit=${
      limit || DEFAULT_SONG_REQUEST_LIMIT
    }`;

    const songs = await axios(url);
    if (songs.data) {
      return { data: (songs?.data?.results as Song[]) || [], error: null };
    }
  } catch (error: any) {
    return { data: null, error: error?.message || "Failed to get songs" };
  }
};

export const refineSongsData = (data: Song[]) => {
  if (!data?.length) return [];

  const songsList: Song[] = [];

  for (const song of data) {
    if (!song?.previewUrl) {
      continue;
    }
    const changeImageUrl = (url: string) => {
      return url.replace("100x100", "900x900");
    };
    const refinedSong = {
      name: song?.collectionName?.split(":")[1] || "",
      artistName: song?.artistName || "",
      previewUrl: song?.previewUrl || "",
      artworkUrl100: changeImageUrl(song?.artworkUrl100) || "",
      artistId: song?.artistId || 0,
      artistViewUrl: song?.artistViewUrl || "",
      collectionCensoredName: song?.collectionCensoredName || "",
      collectionExplicitness: song?.collectionExplicitness || "",
      collectionId: song?.collectionId || 0,
      collectionName: song?.collectionName || "",
      collectionPrice: song?.collectionPrice || 0,
      collectionViewUrl: song?.collectionViewUrl || "",
      country: song?.country || "",
      currency: song?.currency || "",
      description: song?.description || "",
      primaryGenreName: song?.primaryGenreName || "",
      releaseDate: song?.releaseDate || "",
      trackCount: song?.trackCount || 0,
      wrapperType: song?.wrapperType || "",
    };

    songsList.push(refinedSong);
  }
  return songsList;
};
