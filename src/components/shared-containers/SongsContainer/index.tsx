import { Box, IconButton, Skeleton } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_SONG_REQUEST_LIMIT } from "@constants/index";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { setCurrentSong, setPlay, setSongs } from "@reducers/SongReducer";
import { getSongs, refineSongsData } from "./helper";
import { StyledRootBox } from "./style";
import CustomCard from "@shared-components/CustomCard";
import SongModel from "@src/components/SongModel";

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

  const handleScroll = useCallback(async () => {
    if (containerRef.current) {
      const scrollHeight = containerRef.current.scrollHeight;
      const scrollTop = containerRef.current.scrollTop;
      const clientHeight = containerRef.current.clientHeight;
      const isNotScrolledToBottom = scrollHeight - scrollTop !== clientHeight;

      if (isNotScrolledToBottom || isLoading || scrollIsLoading || search) {
        return;
      }
      setScrollIsLoading(true);
      setOffset((prev) => {
        return (prev += 15);
      });
      setScrollIsLoading(false);
    }
  }, [search, isLoading, scrollIsLoading]);

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
  }, [isLoading, offset]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const setSong = (song: Song) => {
    if (currentSong?.previewUrl === song?.previewUrl) {
      dispatch(setPlay({ isPlaying: isPlaying ? false : true }));
    } else {
      dispatch(setCurrentSong({ currentSong: song }));
    }
  };

  const handleClick = (song: Song) => {
    setIsOpen(true);
    setSong(song);
  };

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const newSongs = await getSongs(
        search,
        offset,
        search ? 100 : DEFAULT_SONG_REQUEST_LIMIT
      );
      setIsLoading(false);

      if (newSongs?.data) {
        const refinedData = refineSongsData(newSongs?.data);
        if (!currentSong?.previewUrl && refinedData?.length) {
          dispatch(setCurrentSong({ currentSong: refinedData[0] }));
        }

        dispatch(setSongs({ songs: refinedData }));
      }
    })();
    setIsLoading(false);

    // eslint-disable-next-line
  }, [search, offset]);

  const skeletonArray: number[] = [];
  for (let i = 0; i < 10; i++) {
    skeletonArray.push(i);
  }

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
            <CustomCard
              key={index}
              details={song}
              onClick={() => {
                handleClick(song);
              }}
            />
          );
        })
      : renderSkelton();
  };

  return (
    <StyledRootBox ref={containerRef}>
      <SongModel isOpen={isOpen} onClose={handleClose} setSong={setSong} />
      {renderContent(songs)}
      {scrollIsLoading ? renderSkelton() : <></>}
    </StyledRootBox>
  );
};

export default SongsContainer;
