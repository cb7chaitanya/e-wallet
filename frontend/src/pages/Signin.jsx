import React from 'react'
import {Heading} from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { Bottom } from '../components/Bottom'

function Signin() {
  return (
    <div className='bg-slate-300 h-screen flex justify-center items-center'>
      <div className='rounded-lg bg-white w-80 p-2 text-center px-4 h-max'>
        <Heading heading={"Sign In"} />
        <SubHeading subHeading={"Enter Details"} />
        <Input label={"Email"} placeholder={"Enter Email"} />
        <Input label={"Password"} placeholder={"Enter Password"} />
        <div>
          <Button label={"Sign In"} />
        </div>
        <Bottom label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
      </div>
    </div>
  )
}

export default Signin