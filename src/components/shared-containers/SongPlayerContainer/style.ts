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
  bottom: "0px",
  width: "100%",
}));
