import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Eye,EyeSlash,LockFill,PersonCircle,PersonFill} from "react-bootstrap-icons";

export default function Login() {
  const navigate = useNavigate();
  const inputRef = useRef({});
  const [data, setData] = useState({username: "",password: "",});
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (data.username === "" || data.username === undefined) {
      inputRef.current.username.focus();
    } else if (data.password === "" || data.password === undefined) {
      inputRef.current.password.focus();
    } else if (data.username && data.password) {
      try {
          await fetch("http://localhost:4000/login", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        })
          .then((result) => result.json())
          .then((body) => setErrorMessage(body));
        
      } catch (error) {
        console.log(`Error In Login -> ${error}`);
      }
    }
  };

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    inputRef.current.username.focus();
    if (errorMessage==="ok") {
      navigate("/feedcheck");
      localStorage.setItem("username",data.username)
    }
  }, [errorMessage,data.username,navigate]);

  return (
    <>
      <center>
        <br />
        <div class="card" style={{width: "450px",borderRadius: "30px",marginTop: "150px",height: "500px"}}>
          <div class="card-body">
            <h4>Feed Check</h4>
            <br />
            <fieldset style={{ width: "350px" }}>
              <PersonCircle style={{ fontSize: "80px" }} />
              <br />
              <br />
              <form class="mx-1 mx-md-4">
                <div class="d-flex flex-row align-items-center mb-4">
                  <PersonFill style={{ marginTop: "-10px", fontSize: "30px" }}/>&nbsp;
                  <div class="form-outline flex-fill mb-0">
                    <input
                      type="text"
                      id="form3Example1c"
                      class="form-control"
                      placeholder="Username"
                      name="username"
                      onChange={handleInputChange}
                      value={data.username}
                      ref={(ref) => (inputRef.current.username = ref)}
                    />
                  </div>
                </div>
                <br />
                <div class="d-flex flex-row align-items-center mb-4">
                  <LockFill style={{ marginTop: "-30px", fontSize: "30px" }} />
                  &nbsp;
                  <div class="form-outline flex-fill mb-0">
                    <input
                      type={showPassword ? "text" : "password"}
                      class="form-control"
                      placeholder="Enter your password"
                      name="password"
                      onChange={handleInputChange}
                      value={data.password}
                      ref={(ref) => (inputRef.current.password = ref)}
                    />
                    {showPassword ? (
                      <Eye
                        style={{
                          marginTop: "-70px",
                          marginInlineEnd: "-200px",
                          cursor: "pointer",
                        }}
                        onClick={handlePassword}
                      />
                    ) : (
                      <EyeSlash
                        style={{
                          marginTop: "-70px",
                          marginInlineEnd: "-200px",
                          cursor: "pointer",
                        }}
                        onClick={handlePassword}
                      />
                    )}
                  </div>
                </div>
                {errorMessage && errorMessage!=="ok" && (
                  <p class= "alert alert-secondary" style={{backgroundColor:"rgba( 208, 2, 27, 0.25 )",height:"50px",color:"red"}}>
                    {errorMessage === "ok" ? "" : 
                   <p > {errorMessage}
                   </p>
                  }
                  </p>
                )}
                <button
                  type="button"
                  class="btn btn-success btn-md"
                  onClick={(event) => handleLogin(event)}>
                  Login
                </button>
                <br /> <br />
              </form>
            </fieldset>
          </div>
        </div>
      </center>
    </>
  );
}
