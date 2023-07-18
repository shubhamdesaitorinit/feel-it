import { Box, CardMedia } from "@mui/material";
import LoginImage from "@images/loginImage.jpeg";
import LoginCard from "@components/LoginCard";
import { StyledLoginBox, StyledRootBox } from "./style";

const LoginPage = () => {
  return (
    <Box className="container-2xl h-screen flex mx-auto">
      <StyledRootBox>
        <CardMedia
          component="img"
          sx={{
            borderRadius: "10px",
            height: "100%",
          }}
          image={LoginImage}
          alt="S"
        ></CardMedia>
      </StyledRootBox>
      <StyledLoginBox>
        <LoginCard />
      </StyledLoginBox>
    </Box>
  );
};
export default LoginPage;
