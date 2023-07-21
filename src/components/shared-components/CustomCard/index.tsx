import { Box, IconButton, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector } from "react-redux";
import { StyledDetailsBox, StyledImageBox, StyledRootBox } from "./style";
import { sliceText } from "@constants/index";
import LazyImage from "@src/components/LazyImage";

interface CardType {
  details: Song;
  onClick: () => void;
}

const CustomCard = ({ details, onClick }: CardType) => {
  const {
    currentSong,
    songAction: { isPlaying },
  } = useSelector((state: { song: SongStoreType }) => state.song);

  return (
    <StyledRootBox
      border={`2px solid ${
        currentSong?.previewUrl === details?.previewUrl ? "#b91c1c" : ""
      }`}
      onClick={onClick}
    >
      <StyledImageBox>
        <LazyImage
          url={details?.artworkUrl100}
          lowUrl={details?.artworkUrl60}
        />
      </StyledImageBox>

      <StyledDetailsBox>
        <Box>
          <Typography fontSize={"14px"} variant="h6" padding="5px">
            {sliceText(details?.name || details?.artistName, 22)}
          </Typography>
          <Typography fontSize={"14px"} padding="5px">
            Lyrics : {sliceText(details?.artistName, 16)}
          </Typography>
        </Box>
        <Box sx={{ alignSelf: "center" }}>
          <IconButton size={"large"}>
            {isPlaying && currentSong?.previewUrl === details?.previewUrl ? (
              <PauseIcon />
            ) : (
              <PlayArrowIcon />
            )}
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
