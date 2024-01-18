import { useState } from "react";
import axios from "axios";

const RegisterForm = ({changeLoginState}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        passwordCheck: "",
    });

    const [error, setError] = useState("")
    const errorStyle = {
        color: error === "Password Matched" ? "green" : "red",
        fontSize: "small",
        fontStyle: "italic"
    }

    function passwordCheck(password) {
        if (formData.password !== password) {
            setError("Passwords do not match")
        }
        else {
            setError("Password Matched")
        }
        setFormData({ ...formData, passwordCheck: password })
    }


    function handleRegister() {
        const { name, email, password, mobile } = formData;
        axios.post("http://localhost:3001/auth/register", data)
        .then((res) => {
            console.log(res.data);
            alert("Registered Successfully")
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className="w-full h-full">
            <h1 className="text-3xl font-bold text-center pt-4">Register</h1>
      <form
        className="bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="mb-6 flex justify-between">
            <div>
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
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="******************"
          />
          <p style={errorStyle}>Please choose a password.</p>
          </div>
          <div>
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password1"
            type="password"
            value={formData.passwordCheck}
            onChange={(e) =>
                passwordCheck(e.target.value)
            }
            placeholder="******************"
          />
          <p style={errorStyle}>{error}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleRegister}
          >
            Sign Up
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
            // onClick={() => dispatch(setStatus({ login: false}))}
            onClick={() => changeLoginState()}

          >
            Already a user?
          </a>
        </div>
      </form>
      {/* <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p> */}
    </div>
    )
};

export default RegisterForm;