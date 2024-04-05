import React, { useState, useEffect } from "react";
// import "./FaultHistory.css";
import axios from "axios";
import DisplayCard from "./DisplayCard";

import { ToastContainer, toast } from "react-toastify";

function ServiceHistory(props) {
  // toast
  const notifysuccess = (c) => {
    toast.success(c, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  };
  const notifyerror = (c) => {
    toast.error(c, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  };
  const [description, setDiscription] = useState("");

  const [modal, setModal] = useState(false);

  const [data, setData] = useState([]);
  const [vehicleid] = useState("hero");
  useEffect(() => {
    fetchHistory();
  }, []);

  async function fetchHistory() {
    axios
      .get("http://10.29.8.31:5000/service-history/get", {
        // .get("http://localhost:5000/service-history/get", {
        params: {
          vehicleid: vehicleid,
        },
      })
      .then(function (response) {
        setData(response.data.service_history);
        //   setData(response.data.fault_history);
      })
      .catch(function (error) {
        // Handle error
        console.error("Error fetching fault history:", error);
      });
  }

  // Fault register
  async function registerfault(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://10.29.8.31:5000/service-history/add", {
          vehicleid,
          description,
        })
        .then((res) => {
          if (res.status === 200) {
            notifysuccess("Service history registered successfully");
            fetchHistory();
            setModal(false);
          }
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      // props.notifyerror("Something went wrong during login.");
      console.error(e);
    }
  }
  return (
    <div>
      <p
        style={{
          color: "black",
          fontSize: "2.5vh",
          textAlign: "center",
          marginBottom: "0.5rem",
        }}
      >
        Service History
      </p>
      <div
        className="overflow-y-auto"
        style={{
          height: "520px",
          borderRadius: "1rem",
          scrollbarWidth: "none",
        }}
      >
        {/* extra adding card */}
        <div
          className=" display-card cursor-pointer"
          style={{ marginBottom: "1vh" }}
        >
          <div className="add-display-card block max-w-full p-6 bg-white border border-gray-200 rounded-2xl shadow ">
            <h5
              className="mb-2 font-bold tracking-tight text-gray-900"
              style={{ fontSize: "2vh" }}
            >
              Add Service history{" "}
            </h5>

            <span
              class="add-icon material-symbols-outlined"
              onClick={() => {
                setModal(true);
              }}
            >
              add_circle
            </span>
          </div>
        </div>
        {modal && (
          <>
            <div>
              <div className="modal">
                <div
                  onClick={() => {
                    setModal(false);
                  }}
                  className="overlay"
                ></div>
                <div className="modal-content">
                  <input type="checkbox" id="login2-chk" aria-hidden="true" />
                  <div className="modal-closer">
                    <p
                      onClick={() => {
                        setModal(false);
                      }}
                    >
                      X
                    </p>
                  </div>

                  <div className="model-content-form1 w-full rounded-lg shado md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Register new servicing
                      </h1>
                      <form className="space-y-4 md:space-y-6" action="POST">
                        <div>
                          <label
                            htmlFor="discription"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Description
                          </label>
                          <input
                            type="text"
                            name="discription"
                            id="discription"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Fault Discription "
                            onChange={(e) => setDiscription(e.target.value)}
                          />
                        </div>
                        <button
                          type="submit"
                          className="sign-in-button w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                          onClick={registerfault}
                        >
                          Register Servicing
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {data
          .slice()
          .reverse()
          .map((entry) => (
            <DisplayCard
              key={entry.service_history_id}
              name={entry.description}
              timestamp={entry.timestamp}
            />
          ))}
      </div>
    </div>
  );
}

export default ServiceHistory;
