import { CardMedia } from "@mui/material";
import LoginImage from "../../assets/images/loginImage.jpeg";
import LoginCardContainer from "../../components/shared-containers/LoginCardContainer";
import { StyledLoginBox, StyledRootBox } from "./style";

const LoginPage = () => {
  return (
    <div className="container-2xl h-screen flex mx-auto">
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
        <LoginCardContainer />
      </StyledLoginBox>
    </div>
  );
};
export default LoginPage;
