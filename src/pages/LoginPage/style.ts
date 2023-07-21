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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  @media (max-width: 900px) {
    width: 100% !important;
  }
`;
