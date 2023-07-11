import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../supabase/Auth";
import { StyledRootBox } from "./style";

const LoginCardContainer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.access_token) {
        navigate("/");
      }
    })();
    // eslint-disable-next-line
  }, []);

  const loginHandler = async () => {
    await supabase.auth?.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <StyledRootBox>
      <div className="h-1/4 justify-around flex flex-col bg-white rounded-2xl ">
        <h4 className="text-center ">Login</h4>

        <button
          onClick={loginHandler}
          className=" m-2 text-2xl  p-2 rounded-xl text-white bg-rose-500 focus:ring focus:ring-violet-300 "
        >
          Google
        </button>
      </div>
    </StyledRootBox>
  );
};
export default LoginCardContainer;
