import { Box, Typography } from "@mui/material";

interface NavigationProps {
  handleCloseDrawer?: () => void;
}

const SideBar = ({ handleCloseDrawer }: NavigationProps) => {
  const handleRedirect = (pathname: string) => {
    const url = pathname === "home" ? "/" : `/${pathname}`;
    if (handleCloseDrawer) handleCloseDrawer();
  };

  return (
    <Box width={"100%"}>
      <Typography onClick={() => handleRedirect("home")}>Home</Typography>
    </Box>
  );
};

export default SideBar;
