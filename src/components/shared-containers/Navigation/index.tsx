import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { supabase } from "@supabaseClient/Auth";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch, setSongs } from "@reducers/SongReducer";
import {
  Search,
  SearchIconWrapper,
  StyledDrawer,
  StyledInputBase,
  StyledRootBox,
} from "./style";
import { saveUserToken } from "@reducers/UserReducer";
import theme from "@src/utils/Theme";
import { debounce } from "@src/utils/GlobalFuntions";
import { Drawer } from "@mui/material";
import Sidebar from "@src/components/shared-layouts/Sidebar";

const Navigation = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isDrawerOpen, setDrawerIsOpen] = useState(false);

  const isMenuOpen = Boolean(anchorEl);

  //Functions
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerClose = () => {
    setDrawerIsOpen(false);
  };

  const handleOpenDrawer = () => {
    setDrawerIsOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    setAnchorEl(null);
    await supabase.auth.signOut();
    dispatch(
      saveUserToken({
        token: "",
        email: "",
      })
    );
    navigate("/");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const setSearchVal = (searchInputVal: string) => {
    dispatch(setSearch({ search: searchInputVal }));
    dispatch(setSongs({ songs: [] }));
  };

  const handleSearch = debounce((inputVal: string) => {
    if (inputRef.current !== null) {
    }
    setSearchVal(inputVal);
  }, 1000);

  const renderMenu = (
    <Menu
      sx={{ zIndex: "99999" }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleClose}
    >
      <MenuItem onClick={handleLogout}>Log Out</MenuItem>
    </Menu>
  );

  return (
    <StyledRootBox>
      <StyledDrawer open={isDrawerOpen} onClose={handleDrawerClose}>
        <Sidebar handleCloseDrawer={handleDrawerClose} />
      </StyledDrawer>

      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: theme.palette.secondary.main }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleOpenDrawer}
            sx={{ mr: 2, color: theme.palette.secondary.dark }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            fontWeight={"600"}
            sx={{
              paddingRight: "10px",
              display: {
                color: theme.palette.secondary.contrastText,
              },
            }}
          >
            Feel !t
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              defaultValue={""}
              onChange={(e) => {
                handleSearch(e?.target?.value);
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </StyledRootBox>
  );
};

export default Navigation;
