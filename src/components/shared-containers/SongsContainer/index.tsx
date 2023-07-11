import { Box, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentSong,
  setPlay,
  setSerchedSong,
  setSongs,
} from "../../../reducers/SongReducer";
import { getSongs, refineSongsData } from "./helper";
import { StyledRootBox } from "./style";

const SongsContainer = () => {
  const {
    songs,
    currentSong,
    songAction: { isPlaying, search },
    searchSongs,
  } = useSelector((state: { song: SongStoreType }) => state.song);

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getSongData = async () => {
    setIsLoading(true);
    const newSongs = await getSongs(search, page, 10);
    setIsLoading(false);

    if (newSongs?.data !== null) {
      const refinedData = refineSongsData(newSongs?.data);
      if (currentSong.previewUrl === "") {
        dispatch(
          setCurrentSong({
            currentSong: refinedData[0],
          })
        );
      }
      dispatch(setSongs({ songs: refinedData }));
    }
  };

  const getSearchSong = async () => {
    setIsLoading(true);
    const newSongs = await getSongs(search);
    setIsLoading(false);

    if (newSongs?.data !== null) {
      const refinedData = refineSongsData(newSongs?.data);
      if (currentSong.previewUrl === "") {
        dispatch(
          setSerchedSong({
            searchSongs: refinedData,
          })
        );
      }
    }
  };

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    setPage((prev) => prev + 1);

    await getSongData();
  };

  const setSong = (song: Song) => {
    if (currentSong?.previewUrl === song.previewUrl) {
      dispatch(setPlay({ isPlaying: !isPlaying }));
    } else {
      dispatch(setCurrentSong({ currentSong: song }));
      dispatch(setPlay({ isPlaying: true }));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [isLoading]);

  useEffect(() => {
    if (search) {
      getSearchSong();
    }
    // eslint-disable-next-line
  }, [search]);

  useEffect(() => {
    getSongData();
    // eslint-disable-next-line
  }, []);

  const renderContent = (songs: Song[]) => {
    return songs?.length ? (
      searchSongs.map((song: Song, index: number) => {
        return (
          <Box key={index} onClick={() => setSong(song)}>
            <CardMedia
              component="img"
              image={song?.artworkUrl100}
              alt="S"
              sx={{
                width: "300px !important",
                height: "300px !important",
                borderRadius: "10px",
              }}
            />
            <Typography>{song?.artistName.slice(0, 10)}</Typography>
          </Box>
        );
      })
    ) : (
      <></>
    );
  };

  return (
    <StyledRootBox>{renderContent(search ? songs : searchSongs)}</StyledRootBox>
  );
};

export default SongsContainer;
