import { useState } from "react";
import LoginForm from "./login";
import RegisterForm from "./register";

const Login = () => {
  
    const [login, setLogin] = useState(false);

  return (
    <div className="h-screen w-screen text-center flex flex-col items-center justify-around">
      {/* <h1 className="font-bold text-white text-6xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">Welcome to B8rHomes</h1> */}
        <div className="image bg-[url('./bg1.avif')] h-screen w-screen bg-cover blur-sm absolute -z-10"></div>
        <div className="login rounded-md shadow-lg w-2/5 bg-black text-white text-left">
          {
            login ? <LoginForm changeLoginState={() => {setLogin(false)}}/>: <RegisterForm changeLoginState={() => {setLogin(true)}}/>
          }
        </div>
    </div>
  );
};

export default Login;
