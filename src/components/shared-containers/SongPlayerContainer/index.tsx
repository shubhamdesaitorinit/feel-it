import { Box, CardMedia, IconButton, Slider, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { StyledRootBox } from "./style";
import { setPlay } from "../../../reducers/SongReducer";

const SongPlayerContainer = () => {
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
      if (audioRef.current.paused || isPlaying) {
        audioRef.current.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      } else if (!audioRef.current.paused || !isPlaying) {
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

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else {
      togglePlayback();
    }
    // eslint-disable-next-line
  }, [currentSong.previewUrl, isPlaying]);

  return (
    <StyledRootBox>
      <Box sx={{ display: "flex", width: "70%", gap: "10px" }}>
        <CardMedia
          component="img"
          height="50px"
          sx={{ width: "50px !important", borderRadius: "10px" }}
          image={currentSong?.artworkUrl100}
          alt="S"
        ></CardMedia>
        <Typography>
          {currentSong?.trackCensoredName || currentSong?.artistName}
        </Typography>
        <IconButton onClick={togglePlay} size={"large"}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <IconButton onClick={() => {}} size={"large"}>
          <FavoriteBorderIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", width: "30%" }}>
        <VolumeUpIcon />
        <Slider
          sx={{ width: "70%" }}
          size="small"
          value={volume}
          onChange={(_, newValue) => {
            handleVolumeChange(newValue as number);
          }}
          min={0}
          max={100}
          aria-label="Volume slider"
        />
        <Typography>{volume}</Typography>
      </Box>
      <audio ref={audioRef} src={currentSong?.previewUrl} />
    </StyledRootBox>
  );
};

export default SongPlayerContainer;
