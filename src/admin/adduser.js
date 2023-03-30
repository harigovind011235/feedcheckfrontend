import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import {
  EyeFill,
  EyeSlashFill,
  LockFill,
  PersonAdd,
  PersonCheckFill,
  PersonCircle,
  PersonFill,
} from "react-bootstrap-icons";

export default function AddUser() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    employeename: "",
    userid: "",
  });
  const [addUser, setAddUser] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdduser = () => {
    if (
      formData.username != "" &&
      formData.password !== "" &&
      formData.employeename !== "" &&
      formData.userid !== ""
    ) {
      setAddUser([...addUser, formData]);
      setFormData({ username: "", password: "", employeename: "", userid: "" });
    }
  };
console.log(addUser)
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
     
      
              <center>
                <div class="card rounded-3" style={{marginTop:"100px",height:"400px",width:"500px",borderRadius:"50px"}}>
                    <Form>
                      <br />
                      <h5>Add user </h5>
                      <br />
                      <fieldset style={{ width: "380px" }}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicEmail"
                          style={{ display: "flex" }}
                        >
                          <PersonFill
                            style={{ marginTop: "10px", fontSize: "25px" }}
                          />{" "}
                          &nbsp;&nbsp;
                          <Form.Control
                            type="text"
                            placeholder="Enter Username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicEmail"
                          style={{ display: "flex" }}
                        >
                          <LockFill
                            style={{ marginTop: "10px", fontSize: "25px" }}
                          />
                          &nbsp;&nbsp;
                          <Form.Control
                            type={showPassword ? "text" : "password"}
                            placeholder="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                          />
                          {showPassword ? (
                            <EyeFill
                              style={{
                                marginLeft: "-25px",
                                marginTop: "13px",
                                cursor: "pointer",
                              }}
                              onClick={handlePassword}
                            />
                          ) : (
                            <EyeSlashFill
                              style={{
                                marginLeft: "-25px",
                                marginTop: "13px",
                                cursor: "pointer",
                              }}
                              onClick={handlePassword}
                            />
                          )}
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicEmail"
                          style={{ display: "flex" }}
                        >
                          <PersonCircle
                            style={{ marginTop: "10px", fontSize: "25px" }}
                          />
                          &nbsp; &nbsp;
                          <Form.Control
                            type="text"
                            placeholder="Enter employeename"
                            name="employeename"
                            value={formData.employeename}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicEmail"
                          style={{ display: "flex" }}
                        >
                          <PersonCheckFill
                            style={{ marginTop: "10px", fontSize: "25px" }}
                          />{" "}
                          &nbsp;&nbsp;
                          <Form.Control
                            type="text"
                            placeholder="User ID"
                            name="userid"
                            value={formData.userid}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                        <Button onClick={handleAdduser}>
                        <PersonAdd style={{ fontSize: "20px" }} />&nbsp;
                          Add user 
                        </Button>
                      </fieldset>
                    </Form>
                  </div>
                  </center>
               
    </>
  );
}
