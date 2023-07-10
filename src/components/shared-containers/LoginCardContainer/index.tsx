import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUserToken } from "../../../reducers/UserReducer";
import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import axios from "axios";
// const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;
interface User {
  credential: string;
}

interface Profile {
  email: string;
}
const LoginCardContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | any>();

  const [profile, setProfile] = useState<Profile | null>();

  // const loginHandler = () => {
  //   dispatch(saveUserToken({ token: profile?.email }));
  //   navigate("/");
  // };
  const responseMessage = (response: any) => {
    setUser(response);
    dispatch(saveUserToken({ token: profile?.email }));

    console.log(response);
  };
  const errorMessage = () => {
    console.log("error");
  };

  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => setUser(codeResponse),
  //   onError: (error) => console.log("Login Failed:", error),
  // });

  // const logOut = () => {
  //   googleLogout();
  //   setProfile(null);
  // };

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?credential=${user.credential}`,
          {
            headers: {
              Authorization: `Bearer ${user?.credential}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  useEffect(() => {
    if (profile?.email) {
      navigate("/");
    }
  }, [profile?.email, navigate]);

  return (
    <div className="h-1/4 w-4/5 justify-around flex flex-col bg-white rounded-2xl ">
      <h4 className="text-center ">Login</h4>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

      <button
        onClick={() => {}}
        className=" m-2 text-2xl text-amber-600 p-2 rounded-xl hover:text-white hover:bg-rose-500 focus:ring focus:ring-violet-300 "
      >
        Google
      </button>
    </div>
  );
};
export default LoginCardContainer;
