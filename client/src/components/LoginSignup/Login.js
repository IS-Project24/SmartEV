import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = (props) => {
  const navigate = useNavigate();

  const [loginState, setloginState] = useState(true);

  const [userid, setUserid] = useState("");
  const [vehicleid, setVehicleid] = useState("");
  const [userType, setUserType] = useState("Owner");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  // login sumbit
  async function submitLogin(e) {
    e.preventDefault();
    try {
      await axios
        // .post("http://localhost:5000/login", {
        .post("http://10.29.8.31:5000/login", {
          userid,
          vehicleid,
          password,
        })
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            console.log("Login successful");
            props.notifysuccess("Login successful");

            localStorage.setItem("authToken", res.data.authToken);
            localStorage.setItem("userType", res.data.userType);
            localStorage.setItem("isLoggedIn", "true");

            props.setOpenModal();
            props.setLogstat();
            console.log(res.data.userType);
            if (res.data.userType === "Owner") {
              navigate("/Owner"); 
            } else {
              navigate("/Manufacturer");
            }
          } else {
            console.log(res);
          }
        })
        .catch((e) => {
          if (e.response.status === 401) {
            props.notifyerror("Incorrect Password");
          } else if (e.response.status === 404) {
            props.notifyerror("User does not exist");
          } else if (e.response.status === 400) {
            props.notifyerror("Incomplete details provided.");
          } else {
            props.notifyerror("Something went wrong during login.");
            console.error("Error during login:", e);
          }
        });
    } catch (e) {
      props.notifyerror("Something went wrong during login.");
      console.error("Error during login:", e);
    }
  }

  // signup submit
  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        // .post("http://localhost:5000/signup", {
        .post("http://10.29.8.31:5000/signup", {
          userid,
          vehicleid,
          userType,
          contactNumber,
          email,
          address,
          password,
        })
        .then((res) => {
          if (res.status === 201) {
            props.notifysuccess("Signup successful");
            localStorage.setItem("authToken", res.data.authToken);
            localStorage.setItem("userType", res.data.userType);
            localStorage.setItem("isLoggedIn", "true");
            props.setOpenModal();
            props.setLogstat();
            if (res.data.userType === "Owner") {
              navigate("/Owner"); // Route to UserProfile2 for owner
            } else {
              navigate("/Manufacturer"); // Route to UserProfile1 for others
            }
          } else {
            console.log(res);
          }
        })
        .catch((e) => {
          if (e.response.status === 409) {
            props.notifyerror(
              "User already exists with this User Id or Vehicle Id."
            );
          } else if (e.response.status === 400) {
            props.notifyerror("Incomplete details provided.");
          } else {
            props.notifyerror("Something went wrong during signup.");
            console.error("Error during signup:", e);
          }
        });
    } catch (e) {
      props.notifyerror("Something went wrong during signup.");
      console.error("Error during signup:", e);
    }
  }
  return (
    <div>
      <div className="modal">
        <div
          onClick={() => {
            props.setOpenModal();
          }}
          className="overlay"
        ></div>
        <div className="modal-content">
          <input type="checkbox" id="login2-chk" aria-hidden="true" />
          <div className="modal-closer">
            <p
              onClick={() => {
                props.setOpenModal();
              }}
            >
              X
            </p>
          </div>

          {loginState && (
            <div className="model-content-form w-full rounded-lg shado md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="POST">
                  <div>
                    <label
                      htmlFor="User Id"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your User Id
                    </label>
                    <input
                      type="text"
                      name="User Id"
                      id="User Id"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="UID"
                      required=""
                      onChange={(e) => {
                        setUserid(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Vehicle Id"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Vehicle Id
                    </label>
                    <input
                      type="text"
                      name="Vehicle Id"
                      id="Vehicle Id"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="VID"
                      required=""
                      onChange={(e) => {
                        setVehicleid(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  {/* <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        for="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
                  <button
                    type="submit"
                    className="sign-in-button w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={submitLogin}
                  >
                    Sign in
                  </button>

                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <a
                      className="go-to-login-state font-medium text-primary-600 hover:underline dark:text-primary-500"
                      onClick={() => {
                        setloginState(false);
                      }}
                    >
                      Sign up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          )}
          {!loginState && (
            <div className="model-content-form w-full  rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign up to your account
                </h1>
                <form action="POST">
                  <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="userid"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        User Id
                      </label>
                      <input
                        type="text"
                        name="userid"
                        id="userid"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="UID"
                        onChange={(e) => {
                          setUserid(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="vehicleid"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Vehicle Id
                      </label>
                      <input
                        type="text"
                        name="vehicleid"
                        id="vehicleid"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="VID"
                        onChange={(e) => {
                          setVehicleid(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email Id
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="abc@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        User Type
                      </label>
                      <select
                        id="category"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        onChange={(e) => setUserType(e.target.value)}
                      >
                        <option value="Owner">Owner</option>
                        <option value="Manufacturer">Manufacturer</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="contactnumber"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        name="contactnumber"
                        id="contactnumber"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Contact Number"
                        onChange={(e) => setContactNumber(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Kharagpur "
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Re Enter Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password2"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="sign-in-button w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={submit}
                    >
                      Sign up
                    </button>

                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account?{" "}
                      <a
                        className="go-to-login-state font-medium text-primary-600 hover:underline dark:text-primary-500"
                        onClick={() => {
                          setloginState(true);
                        }}
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
