import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledRootBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#a3a3a3",
  padding: "16px",
  zIndex: "9999",
  position: "fixed",
  overflow: "auto",
  bottom: "0px",
  height: "82px",
  width: "100%",
}));

export const StyledBox = styled(Box)`
  display: flex;
  width: 60%;
  gap: 10px;
`;

export const StyledVolumeButtonBox = styled(Box)`
  display: flex;
  width: 30%;
  align-items: center;
  gap: 10px;
`;
