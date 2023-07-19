import { Box, Typography, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

export const StyledModelBox = styled(Box)`
  background-color: #c7d2fe !important;
  margin: 67px auto 84px auto !important;
  overflow: scroll;
  height: calc(100vh - 82px);
  padding: 16px;
  @media (min-width: 600px) {
  }
  background-color: #ffffff;
  border-radius: 8px;
  & .MuiStack-root {
    overflow: hidden !important;
    padding-top: 0px !important;
  }
`;
export const CardBox = styled(Box)`
  display: flex;
  align-items: ceter;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const DetailsBox = styled(Box)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const StyledTypography = styled(Typography)`
  font-size: 24px;
  font-weight: 400;
`;

export const StyledImageBox = styled(Box)`
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  margin: 16px;
  width: 500px;
  border-radius: 8px;
  height: 500px;
  @media (max-width: 1000px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 700px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;
