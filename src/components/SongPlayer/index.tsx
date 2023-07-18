import {
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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { StyledBox, StyledRootBox, StyledVolumeButtonBox } from "./style";
import { setPlay } from "../../reducers/SongReducer";
import { sliceText } from "../../constants";

const SongPlayer = () => {
  const dispatch = useDispatch();
  const {
    currentSong,
    songAction: { isPlaying },
  } = useSelector((state: { song: SongStoreType }) => state.song);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [volume, setVolume] = useState(50);
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
        {currentSong?.image ? (
          <CardMedia
            component="img"
            sx={{
              width: "50px !important",
              height: "50px !important",
              borderRadius: "10px",
            }}
            image={currentSong?.image}
            alt="S"
          ></CardMedia>
        ) : (
          <Skeleton height="86px" width="50px" />
        )}
        {currentSong?.name || currentSong?.artistName ? (
          <Typography>
            {sliceText(currentSong?.name) || sliceText(currentSong?.artistName)}
          </Typography>
        ) : (
          <Skeleton height="40px" width="70px" />
        )}
        <IconButton onClick={togglePlay} size={"large"}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <IconButton size={"large"}>
          <FavoriteBorderIcon />
        </IconButton>
      </StyledBox>
      <StyledVolumeButtonBox>
        {volume <= 0 ? (
          <VolumeOffIcon onClick={toggleVolume} />
        ) : (
          <VolumeUpIcon onClick={toggleVolume} />
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
      <audio ref={audioRef} src={currentSong?.previewUrl || ""} />
    </StyledRootBox>
  );
};

export default SongPlayer;
