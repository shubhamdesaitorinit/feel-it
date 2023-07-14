import {
  Box,
  CardMedia,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_SONG_REQUEST_LIMIT } from "../../../constants";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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
  const [scrollIsLoading, setScrollIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const getSongData = async () => {
    const newSongs = await getSongs(search, page, DEFAULT_SONG_REQUEST_LIMIT);

    if (newSongs?.data !== null) {
      const refinedData = refineSongsData(newSongs?.data);
      if (currentSong?.previewUrl === "") {
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

    if (newSongs?.data !== null && newSongs?.data !== undefined) {
      const refinedData = refineSongsData(newSongs?.data);
      dispatch(setSerchedSong({ searchSongs: refinedData }));
    }
  };

  const handleScroll = async () => {
    if (containerRef.current) {
      const scrollHeight = containerRef.current.scrollHeight;
      const scrollTop = containerRef.current.scrollTop;
      const clientHeight = containerRef.current.clientHeight;
      console.log(scrollHeight - scrollTop, clientHeight);

      if (scrollHeight - scrollTop !== clientHeight || isLoading) {
        return;
      }
      setPage((prev) => prev + 1);
      setScrollIsLoading(true);
      await getSongData();
      setScrollIsLoading(false);
    }
  };

  const setSong = (song: Song) => {
    if (currentSong?.previewUrl === song.previewUrl && isPlaying) {
      dispatch(setPlay({ isPlaying: false }));
    } else if (currentSong?.previewUrl === song.previewUrl && !isPlaying) {
      dispatch(setPlay({ isPlaying: true }));
    } else {
      dispatch(setCurrentSong({ currentSong: song }));
      dispatch(setPlay({ isPlaying: isPlaying ? isPlaying : !isPlaying }));
    }
  };

  useEffect(() => {
    const containerDivRef = containerRef.current;
    if (containerDivRef) {
      containerDivRef.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (containerDivRef) {
        containerDivRef.removeEventListener("scroll", handleScroll);
      }
    };
    // eslint-disable-next-line
  }, [isLoading]);

  useEffect(() => {
    if (search) {
      getSearchSong();
    }
    // eslint-disable-next-line
  }, [search]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await getSongData();
      setIsLoading(false);
    })();
    // eslint-disable-next-line
  }, []);

  const skeletonArray: number[] = [];
  for (let i = 0; i < 10; i++) {
    skeletonArray.push(i);
  }
  console.log({ skeletonArray });

  const renderSkelton = () => {
    return skeletonArray.map((num: number) => {
      return (
        <Box key={num}>
          <Skeleton
            variant="rectangular"
            width={300}
            height={300}
            sx={{ borderRadius: "10px 10px 0 0 " }}
          />
          <Box sx={{ backgroundColor: "#a8a29e", borderRadius: "0 0 8px 8px" }}>
            <Skeleton width="60%" />
            <IconButton size={"large"}>
              <PlayArrowIcon />
            </IconButton>
            <IconButton onClick={() => {}} size={"large"}>
              <FavoriteBorderIcon />
            </IconButton>
          </Box>
        </Box>
      );
    });
  };

  const renderContent = (songs: Song[]) => {
    return !isLoading
      ? songs?.map((song: Song, index: number) => {
          return (
            <Box
              key={index}
              sx={{
                border:
                  currentSong?.previewUrl === song.previewUrl
                    ? "2px solid #b91c1c"
                    : "2px solid #172554",
                borderRadius: "10px",
              }}
            >
              <CardMedia
                component="img"
                image={song?.artworkUrl100}
                alt="S"
                sx={{
                  width: "300px !important",
                  height: "300px !important",
                  borderRadius: "8px 8px 0 0",
                }}
              />
              <Box
                sx={{ backgroundColor: "#a8a29e", borderRadius: "0 0 8px 8px" }}
              >
                <Typography padding="5px">
                  {song?.name?.slice(0, 10)}
                </Typography>
                <IconButton onClick={() => setSong(song)} size={"large"}>
                  {isPlaying && currentSong?.previewUrl === song?.previewUrl ? (
                    <PauseIcon />
                  ) : (
                    <PlayArrowIcon />
                  )}
                </IconButton>
                <IconButton onClick={() => {}} size={"large"}>
                  <FavoriteBorderIcon />
                </IconButton>
              </Box>
            </Box>
          );
        })
      : renderSkelton();
  };

  return (
    <StyledRootBox ref={containerRef}>
      {renderContent(!search ? songs : searchSongs)}
      {scrollIsLoading ? renderSkelton() : <></>}
    </StyledRootBox>
  );
};

export default SongsContainer;
