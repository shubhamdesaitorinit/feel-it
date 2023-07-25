import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector } from "react-redux";
import { StyledDetailsBox, StyledImageBox, StyledRootBox } from "./style";
import LazyImage from "@src/components/LazyImage";

interface CardType {
  details: Song;
  onClick: () => void;
  setSong: (song: Song) => void;
}

const CustomCard = ({ details, onClick, setSong }: CardType): JSX.Element => {
  const {
    currentSong,
    songAction: { isPlaying },
  } = useSelector((state: { song: SongStoreType }) => state.song);
  const currentSongIsPlaying =
    isPlaying && currentSong?.previewUrl === details?.previewUrl;

  return (
    <StyledRootBox onClick={onClick}>
      <StyledImageBox>
        <LazyImage
          url={details?.artworkUrl100}
          lowUrl={details?.artworkUrl60}
        />
      </StyledImageBox>

      <StyledDetailsBox>
        <Box>
          <Typography noWrap fontSize={"14px"} variant="h6" padding="5px">
            {details?.name || details?.artistName}
          </Typography>
          <Typography noWrap color="#334155" fontSize={"14px"} padding="5px">
            Lyrics : {details?.artistName}
          </Typography>
        </Box>
        <Box sx={{ alignSelf: "center" }}>
          <IconButton
            size={"large"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setSong(details);
            }}
          >
            {currentSongIsPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <IconButton size={"large"}>
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
      </StyledDetailsBox>
    </StyledRootBox>
  );
};

export default CustomCard;
