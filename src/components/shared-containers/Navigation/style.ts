import { Box, Drawer, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledRootBox = styled(Box)`
  flex-grow: 1;
  z-index: 9999;
  position: fixed;
  overflow: auto;
  width: 100%;
  top: 0px;
  box-shadow:
    rgba(0, 0, 0, 0.07) 0px 1px 2px,
    rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px,
    rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px,
    rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
  marginRight: "16px",
  marginLeft: 0,
  color: theme.palette.primary.dark,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: "16px",
  cursor: "pointer !important",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const StyledDrawer = styled(Drawer)`
  z-index: 99999 !important;
  position: fixed !important;
  overflow: auto !important;
  width: 20% !important;
  top: 68;
  .MuiDrawer-paper {
    height: calc(100% - 44px);
    box-sizing: border-box !important;
    top: 64px;
    min-width: 298px !important;
    border-radius: 0px 16px 16px 0px;
    z-index: 999999;
  }
`;
