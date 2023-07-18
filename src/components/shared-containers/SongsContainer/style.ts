import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledRootBox = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 12px;
  gap: 20px;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 66px;
  bottom: 82px;
  overflow: auto;
`;

export const StyledModelBox = styled(Box)`
  width: 350px;
  margin: 74px auto 8px auto !important;
  @media (min-width: 600px) {
  }
  background-color: #0e7490;
  border-radius: 8px;
  & .MuiStack-root {
    overflow: hidden !important;
    padding-top: 0px !important;
  }
`;
