import LoginImage from "../../assets/images/loginImage.jpeg";
import LoginCardContainer from "../../components/shared-containers/LoginCardContainer";

const LoginPage = () => {
  return (
    <div className="container-2xl h-screen flex mx-auto">
      <div className="w-3/4 p-2">
        <img
          className=" object-left h-full w-full	"
          src={LoginImage}
          alt=""
        ></img>
      </div>
      <div className="p-2 flex justify-around items-center	 text-center w-1/4 h-full bg-orange-700">
        <LoginCardContainer />
      </div>
    </div>
  );
};
export default LoginPage;
