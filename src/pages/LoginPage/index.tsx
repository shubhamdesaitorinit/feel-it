import { Box, CardMedia } from "@mui/material";
import LoginImage from "../../assets/images/loginImage.jpeg";
import LoginCardContainer from "../../components/shared-containers/LoginCardContainer";

const LoginPage = () => {
  return (
    <div className="container-2xl h-screen flex mx-auto">
      <Box sx={{ padding: "8px", width: "70%", height: "100%" }}>
        <CardMedia
          component="img"
          sx={{
            borderRadius: "10px",
            height: "100%",
          }}
          image={LoginImage}
          alt="S"
        ></CardMedia>
      </Box>
      <Box
        sx={{
          width: "30%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#c2410c",
        }}
      >
        <LoginCardContainer />
      </Box>
    </div>
  );
};
export default LoginPage;
