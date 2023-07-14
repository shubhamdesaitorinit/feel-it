import { supabase } from "../../../supabase/Auth";

export const getSongs = async (
  search?: string,
  offset?: number,
  limit?: number
) => {
  try {
    // const options = {
    //   method: "GET",
    //   url: "https://spotify23.p.rapidapi.com/search/",
    //   params: {
    //     q: "bones",
    //     type: "multi",
    //     offset: "0",
    //     limit: `${DEFAULT_SONG_REQUEST_LIMIT}`,
    //     numberOfTopResults: "5",
    //   },
    //   headers: {
    //     "X-RapidAPI-Key": "c10f167ea9msh3b5c18ee019c52fp133b34jsn164d0f39ca9e",
    //     "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    //   },
    // };
    // const response = await axios.request(options);
    // console.log({ spotify: response.data });
    if (search) {
      const { data, error } = await supabase
        .from("music-app")
        .select()
        .textSearch("track_name", search);
      console.log(error);

      return { data: data || [], error: null };
    } else {
      const { data, error } = await supabase.from("music-app").select();
      return { data: data || [], error: error };
    }
  } catch (error) {
    console.error(error);
  }

  // try {
  //   const response = await axios.request(options);
  //   console.log(response.data);
  //   return { data: response?.data?.albums?.items || [], error: null };
  // } catch (error) {
  //   console.error(error);
  // }
  // try {
  //   const url = `https://itunes.apple.com/search/?term=${
  //     term || `term`
  //   }&offset=${offset || `term`}&limit=${limit || DEFAULT_SONG_REQUEST_LIMIT}`;

  //   const songs = await axios(url);
  //   if (songs.data) {
  //     return { data: songs?.data?.results || [], error: null };
  //   }
  // } catch (error: any) {
  //   return { data: null, error: error?.message || "Failed to get sogs" };
  // }
};

export const refineSongsData = (data: any) => {
  const songsList: Song[] = [];
  if (!data?.length) return [];
  for (const song of data) {
    if (!song.track_url) {
      continue;
    }
    const refinedSong = {
      name: song.track_name,
      previewUrl: song.track_url,
      artworkUrl100: song.track_image || "",
    };
    songsList.push(refinedSong);
  }
  console.log({ songsList });
  return songsList;
};
