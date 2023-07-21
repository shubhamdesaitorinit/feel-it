import { Box, Grid, IconButton, Skeleton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_SONG_REQUEST_LIMIT } from "@constants/index";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { setCurrentSong, setPlay, setSongs } from "@reducers/SongReducer";
import { getSongs, refineSongsData } from "./helper";
import { StyledRootBox } from "./style";
import CustomCard from "@shared-components/CustomCard";
import SongModal from "@src/components/SongModal";
import useScroll from "@src/hooks/ScrollHook";

const SongsContainer = () => {
  const {
    songs,
    currentSong,
    songAction: { isPlaying, search },
  } = useSelector(({ song }: { song: SongStoreType }) => song);

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [scrollIsLoading, setScrollIsLoading] = useState(false);
  const [offset, setOffset] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const setScrollLoading = (loading: boolean) => {
    setScrollIsLoading(loading);
  };
  const changeOffset = () => {
    setOffset((prev) => {
      return (prev += 25);
    });
  };
  useScroll({
    isLoading,
    scrollIsLoading,
    setScrollLoading,
    containerRef,
    changeOffset,
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  const setSong = (song: Song) => {
    if (currentSong?.previewUrl === song?.previewUrl) {
      dispatch(setPlay({ isPlaying: isPlaying ? false : true }));
    } else {
      dispatch(setCurrentSong({ currentSong: song }));
      dispatch(setPlay({ isPlaying: true }));
    }
  };

  const handleClick = (song: Song) => {
    setIsOpen(true);
    setSong(song);
  };

  useEffect(() => {
    if (offset !== 1 && isLoading) {
      setScrollIsLoading(true);
    } else {
      setScrollIsLoading(false);
    }
    // eslint-disable-next-line
  }, [offset]);

  useEffect(() => {
    (async () => {
      const url = `https://itunes.apple.com/search/?term=${
        search || `Billie Eilish`
      }&offset=${search ? "" : offset}&limit=${
        search ? 100 : DEFAULT_SONG_REQUEST_LIMIT
      }`;
      setIsLoading(true);
      const newSongs = await getSongs(url);
      setIsLoading(false);

      if (newSongs?.data) {
        const refinedData = refineSongsData(newSongs?.data);
        if (!currentSong?.previewUrl && refinedData?.length) {
          dispatch(setCurrentSong({ currentSong: refinedData[0] }));
        }

        dispatch(setSongs({ songs: refinedData }));
      }
    })();
    // eslint-disable-next-line
  }, [search, offset, dispatch]);

  const skeletonArray: number[] = new Array(15).fill("");

  const renderSkelton = () => {
    return skeletonArray?.map((num: number, index: number) => {
      return (
        <Grid key={index} item xs={6} sm={4} md={3} lg={2} width={"100%"}>
          <Box
            width={"100%"}
            borderRadius="10px"
            boxShadow={
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
            }
          >
            <Box width={"100%"} height={200}>
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={"100%"}
                sx={{ borderRadius: "10px" }}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "0 0 8px 8px",
              }}
            >
              <Skeleton width="60%" />
              <Skeleton width="40%" />
              <IconButton size={"large"}>
                <PlayArrowIcon />
              </IconButton>
              <IconButton onClick={() => {}} size={"large"}>
                <FavoriteBorderIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      );
    });
  };

  const renderContent = (songs: Song[]) => {
    if (isLoading && !songs.length) {
      return renderSkelton();
    } else {
      return songs?.map((song: Song, index: number) => {
        return (
          <Grid key={index} item xs={6} sm={4} md={3} lg={2} width={"100%"}>
            <CustomCard
              key={index}
              details={song}
              setSong={setSong}
              onClick={() => {
                handleClick(song);
              }}
            />
          </Grid>
        );
      });
    }
  };

  return (
    <>
      <StyledRootBox ref={containerRef} container spacing={2}>
        {renderContent(songs)}
        {isLoading && songs?.length ? renderSkelton() : <></>}
      </StyledRootBox>
      <SongModal isOpen={isOpen} onClose={handleClose} setSong={setSong} />
    </>
  );
};

export default SongsContainer;
