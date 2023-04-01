import React from "react"
import {BoxArrowRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()


  const logoutHandler = () => {
    fetch("http://localhost:4000/logout", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    });
    localStorage.clear("username")
    navigate("/")
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="">Feed Check</a>
          <button type="button" class="btn btn-dark" onClick={logoutHandler}><BoxArrowRight/> Logout</button>
        </div>
      </nav>
    </>
  )
}
export default Header