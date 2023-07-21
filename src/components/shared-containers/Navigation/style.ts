import { Box, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledRootBox = styled(Box)`
  flex-grow: 1;
  z-index: 9999;
  position: fixed;
  overflow: auto;
  width: 100%;
  top: 0px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 5px 5px 4px;
`;

export const StyledIconBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  zIndex: "9999",
}));

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
