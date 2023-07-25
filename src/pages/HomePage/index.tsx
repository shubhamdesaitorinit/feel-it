import React from "react";
import SongsContainer from "@shared-containers/SongsContainer";
import { StyledRootBox } from "./style";

const HomePage = (): JSX.Element => {
  return (
    <StyledRootBox>
      <SongsContainer />
    </StyledRootBox>
  );
};

export default HomePage;
