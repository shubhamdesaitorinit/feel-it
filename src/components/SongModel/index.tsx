import { Button, CardMedia, Modal, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import {
  CardBox,
  DetailsBox,
  StyledImageBox,
  StyledModelBox,
  StyledTypography,
} from "./style";
import { sliceText } from "@src/constants";
import dayjs from "dayjs";

const SongModel = ({ isOpen, onClose, setSong }: SongModelType) => {
  const {
    currentSong,
    songAction: { isPlaying },
  } = useSelector(({ song }: { song: SongStoreType }) => song);
  const releseYear = dayjs(currentSong?.releaseDate).year();

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="song-model"
      aria-describedby="description-song-details"
    >
      <StyledModelBox>
        <CloseIcon
          sx={{
            cursor: "pointer",
          }}
          color="primary"
          fontSize="large"
          onClick={onClose}
        />
        <CardBox>
          <StyledImageBox>
            <CardMedia
              component="img"
              image={currentSong?.artworkUrl100}
              alt="Song Image"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
              }}
            />
          </StyledImageBox>
          <DetailsBox>
            <StyledTypography color="#334155">
              {currentSong?.collectionName.split(":")[0]}
            </StyledTypography>
            <Typography component="h4" variant="h4">
              {sliceText(currentSong?.name, 25) ||
                sliceText(currentSong?.collectionName, 25)}
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              {currentSong?.name || currentSong?.collectionName}
              <FiberManualRecordIcon fontSize="small" color="info" />
              {releseYear}
            </Typography>
            <Typography>
              Artist :{sliceText(currentSong?.artistName, 25)}
            </Typography>
            <Typography>
              Description :
              {currentSong?.description.split("<br />")[0] ||
                `This song is released in ${releseYear} and the artist name is ${currentSong?.artistName}`}
            </Typography>
            <Button
              color="secondary"
              sx={{ backgroundColor: "#0891b2" }}
              onClick={() => setSong(currentSong)}
            >
              {isPlaying ? "Pause" : "Play Song"}
            </Button>
          </DetailsBox>
        </CardBox>
      </StyledModelBox>
    </Modal>
  );
};

export default SongModel;
