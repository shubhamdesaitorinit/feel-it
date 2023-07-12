import { Outlet } from "react-router-dom";
import Navigation from "../../shared-containers/Navigation";
import { Container } from "@mui/material";
import SongPlayerContainer from "../../shared-containers/SongPlayerContainer";

const DefaultLayout = () => {
  return (
    <>
      <Navigation />
      <Container maxWidth={false} disableGutters>
        <Outlet />
      </Container>
      <SongPlayerContainer />
    </>
  );
};

export default DefaultLayout;
