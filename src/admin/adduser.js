import React, { useRef, useState } from "react";
import {EyeFill,EyeSlashFill,LockFill,PersonAdd,PersonCheckFill,PersonCircle,PersonFill} from "react-bootstrap-icons";
import Header from "../component/header";

import { baseUrl } from "../baseurl";

export default function AddUser() {
  const inputRef = useRef({});
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    employeename: "",
    employeeID: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdduser = async (event) => {
    event.preventDefault()
    if (formData.username === "" || formData.username === undefined) {
      inputRef.current.username.focus();
    } else if (formData.password === "" || formData.password === undefined) {
      inputRef.current.password.focus();
    } else if (
      formData.employeename === "" ||
      formData.password === undefined
    ) {
      inputRef.current.employeename.focus();
    } else if (
      formData.employeeID === "" ||
      formData.employeeID === undefined
    ) {
      inputRef.current.employeeID.focus();
    } else if (
      formData.username !== "" &&
      formData.password !== "" &&
      formData.employeename !== "" &&
      formData.employeeID !== ""
    )
      try {
        fetch(`${baseUrl}register`, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((actualData) => setError(actualData));
        setFormData({
          username: "",
          password: "",
          employeename: "",
          employeeID: "",
        });
      } catch (error) {
        console.log(`Error In adduser -> ${error}`);
      }
  };

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  setTimeout(() => {
    setError("");
  }, 8000);

  return (
    <>
    <Header/>
      <section class="h-100 h-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100 mt-5 p-5">
            <div class="col-lg-8 col-xl-6">
              <div class="card shadow-lg my-4" style={{ borderRadius: "30px" }}>
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Add User</h3>
                  {/* /<form class="px-md-2" style={{ marginLeft: "10px" }}> */}
                    <div class="form-outline mb-4">
                      <form class="user" style={{ marginLeft: "10px" }} >
                        <div class="form-group">
                          <span style={{marginLeft: "-110%",fontSize: "20px",marginTop: "100px"}}>
                            <PersonFill />
                          </span>
                          <input
                            type="text"
                            class="form-control form-control-user"
                            placeholder="Enter Username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            ref={(ref) => (inputRef.current.username = ref)}
                            style={{ marginTop: "-8%" }}
                          />
                        </div>
                        <br />
                        <div class="form-group">
                          <span
                            style={{ marginLeft: "-110%", fontSize: "20px" }}
                          >
                            <LockFill />
                          </span>
                          <input
                            type={showPassword ? "text" : "password"}
                            class="form-control form-control-user"
                            placeholder="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            ref={(ref) => (inputRef.current.password = ref)}
                            style={{ marginTop: "-8%" }}
                          />
                        </div>
                        {showPassword ? (
                          <span onClick={handlePassword}>
                            <EyeFill
                              style={{
                                marginLeft: "400px",
                                marginTop: "-110px",
                                cursor:"pointer"
                              }}
                            />
                          </span>
                        ) : (
                          <span onClick={handlePassword}>
                            <EyeSlashFill
                              style={{
                                marginLeft: "400px",
                                marginTop: "-110px",
                                cursor:"pointer"
                              }}
                            />
                          </span>
                        )}
                        <div class="form-group">
                          <span
                            style={{ marginLeft: "-110%", fontSize: "20px" }}
                          >
                            <PersonCircle />
                          </span>
                          <input
                            type="text"
                            class="form-control form-control-user"
                            placeholder="Enter employeename"
                            name="employeename"
                            value={formData.employeename}
                            onChange={handleInputChange}
                            ref={(ref) => (inputRef.current.employeename = ref)}
                            style={{ marginTop: "-8%" }}
                          />
                        </div>
                        <br />
                        <div class="form-group">
                          <span
                            style={{ marginLeft: "-110%", fontSize: "20px" }}
                          >
                            <PersonCheckFill />
                          </span>
                          <input
                            type="text"
                            class="form-control form-control-user"
                            placeholder="User ID"
                            name="employeeID"
                            value={formData.employeeID}
                            onChange={handleInputChange}
                            ref={(ref) => (inputRef.current.employeeID = ref)}
                            style={{ marginTop: "-8%" }}
                          />
                        </div>
                      </form>
                    </div>
                    <br />
                    {error !== "Success" && error !== "" && (
                      <div
                        class="alert alert-secondary"
                        style={{
                          backgroundColor: "rgba( 208, 2, 27, 0.25 )",
                          height: "50px",
                          color: "red",
                        }}
                      >
                        <p>Can't Create User</p>
                      </div>
                    )}
                    <button onClick={handleAdduser} class="btn btn-success btn-user btn-block" style={{fontSize:"16px"}}>
                      <PersonAdd />
                      &nbsp; Add user
                    </button>
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
