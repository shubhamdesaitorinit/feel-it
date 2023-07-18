import { CardMedia, IconButton, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector } from "react-redux";
import { StyledDetailsBox, StyledRootBox } from "./style";
import { sliceText } from "@constants/index";

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
        currentSong?.previewUrl === details?.previewUrl ? "#b91c1c" : "#6b7280"
      }`}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        image={details?.image}
        alt="S"
        sx={{
          width: "300px",
          height: "300px",
          borderRadius: "8px 8px 0 0",
        }}
      />
      <StyledDetailsBox>
        <Typography padding="5px">
          {sliceText(details?.name || details?.artistName)}
        </Typography>
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
      </StyledDetailsBox>
    </StyledRootBox>
  );
};

export default CustomCard;
