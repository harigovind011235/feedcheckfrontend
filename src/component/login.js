import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeSlash, LockFill, PersonCircle, PersonFill } from "react-bootstrap-icons";


import { baseUrl } from "../baseurl";

export default function Login() {
  const navigate = useNavigate()
  const inputRef = useRef({});
  const [data, setData] = useState({ username: "", password: "", });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault()
    if (data.username === "" || data.username === undefined) {
      inputRef.current.username.focus();
    } else if (data.password === "" || data.password === undefined) {
      inputRef.current.password.focus();
    } else if (data.username && data.password) {
      try {
        await
          fetch(`${baseUrl}login`, {
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
    if (errorMessage === "ok") {
      navigate("/feedcheck");
      localStorage.setItem("username", data.username)
    }
  }, [errorMessage]);

  return (
    <>
      <section class="h-100 h-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100 mt-4 p-5">
            <div class="col-lg-8 col-xl-6">
              <div class="card shadow-lg my-4" style={{ borderRadius: "30px", width: "500px" }} >
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Feed Check</h3>
                  <div class="mb-4">
                    <span><PersonCircle style={{ fontSize: "80px" }} /></span>
                  </div>
                  <br />
                  <form class="user">
                    <div class="form-group mb-4">
                      <span> <PersonFill
                        style={{ marginLeft: "-110%", fontSize: "20px" }} />
                      </span>
                      <input type="text" class="form-control form-control-user"
                        id="exampleInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter Your Username" name="username" onChange={handleInputChange}
                        value={data.username}
                        ref={(ref) => (inputRef.current.username = ref)}
                        style={{ marginTop: "-8%" }} />
                    </div>
                    <br />
                    <div class="form-group mb-4">
                      <span><LockFill style={{ marginLeft: "-110%", fontSize: "20px" }} /></span>
                      <input type={showPassword ? "text" : "password"} class="form-control form-control-user"
                        id="exampleInputPassword" placeholder="Password" name="password"
                        onChange={handleInputChange}
                        value={data.password}
                        ref={(ref) => (inputRef.current.password = ref)}
                        style={{ marginTop: "-8%" }} />
                      {showPassword ? (
                        <Eye
                          style={{
                            marginTop: "-70px",
                            marginInlineEnd: "-320px",
                            cursor: "pointer",
                          }}
                          onClick={handlePassword}
                        />
                      ) : (
                        <EyeSlash
                          style={{
                            marginTop: "-70px",
                            marginInlineEnd: "-320px",
                            cursor: "pointer",
                          }}
                          onClick={handlePassword}
                        />
                      )}
                    </div>
                    {errorMessage && errorMessage !== "ok" && (
                      <p class="alert alert-secondary" style={{ backgroundColor: "rgba( 208, 2, 27, 0.25 )", height: "50px", color: "red" }}>
                        {errorMessage === "ok" ? "" :
                          <span>{errorMessage}</span>
                        }
                      </p>
                    )}
                    <button onClick={handleLogin} class="btn btn-success btn-user btn-block" style={{ fontSize: "16px" }}>
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
