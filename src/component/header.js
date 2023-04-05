import React, { useEffect, useState } from "react"
import { BoxArrowRight,PersonAdd } from "react-bootstrap-icons";
import { useLocation, useNavigate } from "react-router-dom"

import { baseUrl } from "../baseurl";

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [username, setUsername] = useState({})
  const [users,setUsers]=useState([])



  const handleAdduser = (event) => {
    event.preventDefault()
    navigate("/adduser")

  }

  const logoutHandler = () => {
    fetch(`${baseUrl}logout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    });
    localStorage.clear("username")
    navigate("/")
  }

  useEffect(() => {
    fetch(`${baseUrl}profile`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo);
      });
    });
  }, []);

  useEffect(()=>{
    fetch(`${baseUrl}users`)
    .then((res)=>res.json())
    .then((data)=>setUsers(data))

  },[])

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top shadow-lg " style={{background:"#658a8a"}}>
        <div class="container-fluid">
          <a class="navbar-brand" href="">Feed Check</a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto no-arrow navbar-nav d-flex">
              <li class="nav-item dropdown no-arrow ">
            {users.filter((ele)=>ele.username === username.username).map((e)=>e.isadmin === true)[0]&& location.pathname==="/feedcheck"&&
              <a href=""class="nav-link dropdown-toggle"><button onClick ={handleAdduser} class="btn btn-dark"><PersonAdd/> Adduser</button></a>}
              </li>
              <li class="nav-item dropdown no-arrow">
                <a href="" class="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span style={{color:"white"}}>{username.username}</span>&nbsp;&nbsp;
                  <img class="img-profile rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-tSGRJoJ8cH_SmMaigMdhK2iTgcS3I53ZQ&usqp=CAU" style={{width:"30px",height:"30px"}}/>
                </a>
                <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                  <a href="" class="dropdown-item" onClick={logoutHandler} style={{cursor:"pointer"}}><BoxArrowRight/>&nbsp;&nbsp;
                    Logout</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Header