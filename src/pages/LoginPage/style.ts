import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledRootBox = styled(Box)`
  padding: 8px;
  width: 70%;
  height: 100%;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledLoginBox = styled(Box)`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #164e63;
  @media (max-width: 900px) {
    width: 100% !important;
  }
`;
