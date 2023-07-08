import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUserToken } from "../../../reducers/UserReducer";

const LoginCardContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {
    dispatch(saveUserToken({ token: "User" }));
    navigate("/");
  };

  return (
    <div className="h-1/4 w-4/5 justify-around flex flex-col bg-white rounded-2xl ">
      <h4 className="text-center ">Login</h4>
      <button
        onClick={loginHandler}
        className=" m-2 text-2xl text-amber-600 p-2 rounded-xl hover:text-white hover:bg-rose-500 focus:ring focus:ring-violet-300 "
      >
        Google
      </button>
    </div>
  );
};
export default LoginCardContainer;
