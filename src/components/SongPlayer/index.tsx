import {
  Box,
  CardMedia,
  IconButton,
  Skeleton,
  Slider,
  Typography,
} from "@mui/material";
import { useState, useEffect, useRef } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { useDispatch, useSelector } from "react-redux";
import { StyledBox, StyledRootBox, StyledVolumeButtonBox } from "./style";
import { setCurrentSong, setPlay } from "@reducers/SongReducer";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import theme from "@src/utils/Theme";
import { sliceText } from "@src/utils/GlobalFuntions";
const SongPlayer = () => {
  const dispatch = useDispatch();
  const {
    songs,
    currentSong,
    songAction: { isPlaying },
  } = useSelector((state: { song: SongStoreType }) => state.song);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [volume, setVolume] = useState(50);
  const [trackTime, setTrackTime] = useState(0);
  const [firstRender, setFirstRender] = useState(true);

  //Functions
  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      } else if (!isPlaying) {
        audioRef.current.pause();
      }
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused || !isPlaying) {
        dispatch(setPlay({ isPlaying: true }));
      } else if (!audioRef.current.paused || isPlaying) {
        dispatch(setPlay({ isPlaying: false }));
      }
    }
  };

  const handleVolumeChange = (newValue: number) => {
    setVolume(newValue);
    if (audioRef.current) {
      audioRef.current.volume = newValue / 100;
    }
  };

  const toggleVolume = () => {
    setVolume((volume) => (volume <= 0 ? 50 : 0));
  };

  const handlePrevButtonClick = () => {
    const isPrevSong = (song: Song) =>
      song?.previewUrl === currentSong?.previewUrl;
    const currentSongIndex = songs?.findIndex(isPrevSong);
    const prevSong =
      songs[currentSongIndex > 0 ? currentSongIndex - 1 : songs?.length - 1];
    dispatch(setCurrentSong({ currentSong: prevSong }));
  };

  const handleNextButtonClick = () => {
    const isNextSong = (song: Song) =>
      song?.previewUrl === currentSong?.previewUrl;
    const currentSongIndex = songs?.findIndex(isNextSong);
    const prevSong =
      songs[currentSongIndex < songs.length - 1 ? currentSongIndex + 1 : 0];
    dispatch(setCurrentSong({ currentSong: prevSong }));
  };

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else {
      togglePlayback();
    }
    // eslint-disable-next-line
  }, [currentSong?.previewUrl, isPlaying]);

  return (
    <StyledRootBox>
      <StyledBox>
        <Box display={"flex"} alignItems={"center"} gap="20px" width={"40%"}>
          {currentSong?.artworkUrl100 ? (
            <CardMedia
              component="img"
              sx={{
                width: "50px !important",
                height: "50px !important",
                borderRadius: "10px",
              }}
              image={currentSong?.artworkUrl100}
              alt="S"
            ></CardMedia>
          ) : (
            <Skeleton height="86px" width="50px" />
          )}
          {currentSong?.name || currentSong?.artistName ? (
            <Typography>
              {sliceText(currentSong?.name || currentSong?.artistName)}
            </Typography>
          ) : (
            <Skeleton height="40px" width="70px" />
          )}
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <IconButton onClick={handlePrevButtonClick}>
              <SkipPreviousIcon />
            </IconButton>
            <IconButton
              onClick={togglePlay}
              size={"small"}
              sx={{
                backgroundColor: theme.palette.secondary.contrastText,
                color: "#ffffff",
              }}
            >
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            <IconButton onClick={handleNextButtonClick}>
              <SkipNextIcon />
            </IconButton>
          </Box>
          <Slider
            sx={{ width: "100%", color: "#082f49" }}
            size="small"
            value={Number(trackTime)}
            onChange={(_, newValue) => {
              audioRef.current!.currentTime = Number(newValue);
            }}
            min={0}
            max={Number(audioRef.current?.duration) || 0}
            aria-label="track slider"
          />
        </Box>
      </StyledBox>
      <StyledVolumeButtonBox>
        {volume <= 0 ? (
          <VolumeOffIcon onClick={toggleVolume} />
        ) : (
          <VolumeUpIcon sx={{ cursor: "pointer" }} onClick={toggleVolume} />
        )}
        <Slider
          sx={{ width: "70%", color: "#0c4a6e" }}
          size="small"
          value={volume}
          onChange={(_, newValue) => {
            handleVolumeChange(newValue as number);
          }}
          min={0}
          max={100}
          aria-label="Volume slider"
        />
      </StyledVolumeButtonBox>
      <audio
        ref={audioRef}
        src={currentSong?.previewUrl || ""}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setTrackTime(Number(audioRef.current?.currentTime));
          }
          if (
            Number(audioRef.current?.currentTime) ===
            Number(audioRef.current?.duration)
          ) {
            handleNextButtonClick();
          }
        }}
      />
    </StyledRootBox>
  );
};

export default SongPlayer;
