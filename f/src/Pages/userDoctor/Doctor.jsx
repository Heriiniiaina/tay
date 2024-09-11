import React,{useEffect} from "react";
import {useNavigate} from "react-router-dom"
import "./Doctor.css"


import NavBar from "../../components/NavBar/Nav.jsx";

let Doctor = () => {
  const navigate = useNavigate()
  useEffect(()=>{
     const doctor = JSON.stringify(sessionStorage.getItem("user"))
     if(!doctor)
      return navigate("/auth")
  })
  return (
    <div className="DoctorPageContainer">
     
      <div className="navBarContainer">
        <NavBar />
      </div>
      
      <div className="contentContainer">
        <p>dzdzzdzdzdzdzdzdzdzd</p>
      </div>
    </div>
  );
}

export default Doctor
