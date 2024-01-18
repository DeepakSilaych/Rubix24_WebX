import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = ({changeLoginState}) => {

  const navigate = useNavigate();

  function handleLogin(e) {
    console.log(detail);

    // axios.post("http://127.0.0.1:8000/api/auth/login/", detail)
    // .then((res) => {
    //     dispatch(setLogin({ user: res.data.user, token: res.data.token }));
    //     console.log(res.data);
    //     console.log(res.data.user);
    //     navigate("/home");
    // })
    // .catch((err) => {
    //     if (err.response.status === 401) {
    //         alert("Invalid Credentials");
    //     }
    //     console.log(err);
    // });

    axios.post("http://127.0.0.1:8000/api/auth/login/",{
        email: detail.email,
        password: detail.password,
    })
    .then(response => {
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
      navigate("/dashboard");
    })
    .catch(error => {
      console.log(error);
      alert("Invalid Credentials");
    });
  } 

  const [detail, setDetail] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="w-full h-full pt-4">
        <h1 className="text-3xl font-bold text-center">Login</h1>
      <form
        className="bg-transparent shadow-md rounded px-8 pt-6 pb-8"
        onSubmit={handleLogin}
      >
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={detail.email}
            onChange={(e) => setDetail({ ...detail, email: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={detail.password}
            onChange={(e) =>
              setDetail({ ...detail, password: e.target.value })
            }
            placeholder="******************"
          />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
            onClick={() => changeLoginState()}
          >
            New user?
          </a>
        </div>
      </form>
      {/* <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p> */}
    </div>
  );
};

export default LoginForm;
