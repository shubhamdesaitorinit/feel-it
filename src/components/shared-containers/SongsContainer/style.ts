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
