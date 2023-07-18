import { CardMedia, IconButton, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, setPlay } from "../../../reducers/SongReducer";
import { StyledDetailsBox, StyledRootBox } from "./style";

interface CardType {
  details: Song;
  onClick: () => void;
}

const CustomCard = ({ details, onClick }: CardType) => {
  const { previewUrl, image, name, artistName } = details;
  const dispatch = useDispatch();
  const {
    currentSong,
    songAction: { isPlaying },
  } = useSelector((state: { song: SongStoreType }) => state.song);

  //Funtions
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

  return (
    <StyledRootBox
      border={`2px solid ${
        currentSong?.previewUrl === previewUrl ? "#b91c1c" : "#6b7280"
      }`}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        image={image}
        alt="S"
        sx={{
          width: "300px !important",
          height: "300px !important",
          borderRadius: "8px 8px 0 0",
        }}
      />
      <StyledDetailsBox>
        <Typography padding="5px">
          {name?.slice(0, 10) || artistName?.slice(0, 10)}
        </Typography>
        <IconButton onClick={() => setSong(details)} size={"large"}>
          {isPlaying && currentSong?.previewUrl === previewUrl ? (
            <PauseIcon />
          ) : (
            <PlayArrowIcon />
          )}
        </IconButton>
        <IconButton onClick={() => {}} size={"large"}>
          <FavoriteBorderIcon />
        </IconButton>
      </StyledDetailsBox>
    </StyledRootBox>
  );
};

export default CustomCard;
