import React, { useState } from 'react'
import {Heading} from '../components/Heading'
import {SubHeading} from '../components/SubHeading'
import {Input} from '../components/Input'
import  {Button}  from '../components/Button'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import {Bottom} from "../components/Bottom"

function Signup() {  
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  return (
    <div className='bg-slate-300 h-screen flex justify-center items-center'>
      <div className='rounded-lg bg-white w-80 p-2 text-center px-4 h-max'>
      <Heading heading={"Sign Up"}/>
      <SubHeading subHeading={"Enter Details"}/>
      <Input label={"First Name"} onChange={e=>{
        setFirstName(e.target.value)
      }} placeholder={"Enter First Name"} />
      <Input label={"Last Name"} onChange={e=>{
        setLastName(e.target.value)
      }} placeholder={"Enter Last Name"}/>
      <Input label={"Email"} onChange={e=>{
        setUsername(e.target.value)
      }} placeholder={"Enter Email"}/>
      <Input label={"Password"} onChange={ e=>{
        setPassword(e.target.value)
      }} placeholder={"Enter Password"} />
      <div>
      <Button label={"Sign Up"} onClick={async() => {
        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
          username,
          firstName,
          lastName, 
          password
        })
        localStorage.setItem("token", response.data.token)
        navigate("/dashboard")
      }} />
      </div>
      <Bottom label={"Already have an account?"} buttonText={"Sign In"} to={"/signin"} />
    </div>
    </div>
  )
}

export default Signup