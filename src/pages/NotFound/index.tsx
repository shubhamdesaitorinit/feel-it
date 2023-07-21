import { Box } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        backgroundColor: "red",
        padding: "16px",
        height: "100%",
      }}
    >
      Page Not Found
    </Box>
  );
};

export default NotFound;
