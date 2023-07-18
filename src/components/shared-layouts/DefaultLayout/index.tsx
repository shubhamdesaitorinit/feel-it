import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navigation from "@shared-containers/Navigation";
import SongPlayer from "@components/SongPlayer";
import { StyledContainer } from "./style";

const DefaultLayout = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Navigation />
      <StyledContainer maxWidth={false} disableGutters>
        <Outlet />
      </StyledContainer>
      <SongPlayer />
    </Container>
  );
};

export default DefaultLayout;
