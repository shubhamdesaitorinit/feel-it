import axios from "axios";

export const getSongs = async (url: string) => {
  console.log("innerApicall", url);
  try {
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

  const songsList: Song[] = data.reduce((accumulator, song) => {
    if (song?.previewUrl) {
      const changeImageUrl = (url: string) => {
        return url.replace("100x100", "500x500");
      };
      const refinedSong = {
        ...song,
        name:
          song?.collectionName?.split(":")[1] ||
          song?.collectionName?.split(":")[0] ||
          "",
        artworkUrl100: changeImageUrl(song?.artworkUrl100) || "",
      };
      accumulator.push(refinedSong);
    }
    return accumulator;
  }, [] as Song[]);
  return songsList;
};
