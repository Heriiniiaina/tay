import React, {useState,useEffect}from 'react'
import LoginCover from "../../assets/cover/bg.svg"
import { useNavigate } from 'react-router-dom'

//component
import { TextField, Button } from '@mui/material'

//ico
import GoogleIcon from '../../assets/ico/icons8-google.svg'
import FacebookIcon from '../../assets/ico/icons8-facebook.svg'
import axios from "axios"
import {toast} from "react-hot-toast"
//style
import "./Login.css"


let LoginUser = ()=> {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate();
  useEffect(()=>{
    const admin = JSON.parse(sessionStorage.getItem("user"))
    if(admin && admin.role=="Admin")
      return navigate("/admin")
    if(admin && admin.role=="Doctor")
      return navigate("/user&doc")
    if(admin && admin.role=="Patient")
      return navigate("/user&patient")
      

  })
  const onSubmit =async (e)=> {
    e.preventDefault()
    const emailsLabel = document.querySelector(".emailErr .MuiFormLabel-root")
    const emailInputDiv = document.querySelector(".emailErr .MuiInputBase-root")
    const passLabel = document.querySelector(".passErr .MuiFormLabel-root")
    const passInputDiv = document.querySelector(".passErr .MuiInputBase-root")

    try {
      const res = await axios.post("http://localhost:2000/api/patient/login",{email,password})
      emailsLabel.classList.remove("Mui-error")
      emailInputDiv.classList.remove("Mui-error")
      passLabel.classList.remove("Mui-error")
      passInputDiv.classList.remove("Mui-error")
      sessionStorage.setItem("user",JSON.stringify(res.data.user))
      if(res.status == 200)
        navigate('/user&patient')

    } catch (error) {
        toast.error(error.response.data.message, { duration: 6000})
        
        if(error.response.data.message=="Email non valide"){
          emailsLabel.classList.add("Mui-error")
          emailInputDiv.classList.add("Mui-error")
        }
        if(error.response.data.message=="Email non valide"){
          emailsLabel.classList.add("Mui-error")
          emailInputDiv.classList.add("Mui-error")
        }
        if(error.response.data.message=="Mot de passe non valide"){
          passLabel.classList.add("Mui-error")
          passInputDiv.classList.add("Mui-error")
        }
    }
  }
  return (
    <>
      <div className='loginParent'>
        <section className="cover"> 
          <p>+</p>
          <img src={LoginCover}  alt='Cover'/>
        </section>
        <section className='sectionForm'>

          <div className='salutation'>
            <h2>Welcome Back to SSC !</h2>
            <p>Lets get you Logged in</p>
          </div>

          <div className='divForm'>
            <form action="#" onSubmit={onSubmit}>
              <TextField 
              
                id='outlined-required'
                label="Email"
                defaultValue="" className='textField emailErr' onChange={e=>setEmail(e.target.value)} />
              <TextField 
                id='outlined-password-input'
                label="Password"
                type='password'
                autoComplete='current-password'
                className='textField passErr' onChange={e=>setPassword(e.target.value)}/>
              
              <Button type='submit' className='btnSubmit' variant="Contained">Se Connecter</Button>
            </form>
            <a href=""><Button className='btnOtherLog' variant="Contained">Autre methode de connexion</Button></a>
            
            <div className='forgotPasswSection'>
              <Button className='otherLogBtn' variant='outlined'><img src={GoogleIcon} alt="" />Continuer avec Google</Button>
              <Button className='otherLogBtn' variant='outlined' ><img  src={FacebookIcon} alt="" />Continuer avec Facebook</Button>
            </div>
          </div>

        </section>
      </div>
      
    </>
  )
}

export default LoginUser