import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../supabase/Auth";

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
