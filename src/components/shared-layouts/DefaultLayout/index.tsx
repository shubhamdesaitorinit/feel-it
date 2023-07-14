import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navigation from "../../shared-containers/Navigation";
import SongPlayerContainer from "../../shared-containers/SongPlayerContainer";
import { StyledContainer } from "./style";

const DefaultLayout = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Navigation />
      <StyledContainer maxWidth={false} disableGutters>
        <Outlet />
      </StyledContainer>
      <SongPlayerContainer />
    </Container>
  );
};

export default DefaultLayout;
