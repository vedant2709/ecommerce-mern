import React, { useState } from "react";
import blacklogo from "../images/blacklogo.png";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

function Signup() {
    const [formData,setformData]=useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:"",
      })
    
      console.log(formData)
    
      const handleOnChange=(e)=>{
        const {name,value}=e.target;
    
        setformData(()=>{
          return {
            ...formData,
            [name]:value
          }
        })
      }
  return (
    <div className="w-full min-h-screen flex justify-start flex-col items-center pb-14 gap-2">
      <div className="logo w-[15vw] h-[8vw] ">
        <img src={blacklogo} className="w-full" alt="" />
      </div>
      <div className="w-1/3 bg-white shadow-xl border-[1px] border-zinc-300 rounded-sm p-5">
        <h2 className="text-2xl font-semibold">Create Account</h2>
        <form action="" className="mt-5">
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-sm">Your Name</h4>
            <input
              type="text"
              name="fname"
              className="border-[1px] border-zinc-400 rounded-sm outline-none px-2 py-1"
              onChange={handleOnChange}
              value={formData.fname}
            />
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <h4 className="font-bold text-sm">Email</h4>
            <input
              type="text"
              name="email"
              className="border-[1px] border-zinc-400 rounded-sm outline-none px-2 py-1"
              onChange={handleOnChange}
              value={formData.email}
            />
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <h4 className="font-bold text-sm">Mobile Number</h4>
            <input
              type="text"
              name="mobile"
              className="border-[1px] border-zinc-400 rounded-sm outline-none px-2 py-1"
              onChange={handleOnChange}
              value={formData.mobile}
            />
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <h4 className="font-bold text-sm">Password</h4>
            <input
              type="password"
              name="password"
              className="border-[1px] border-zinc-400 rounded-sm outline-none px-2 py-1"
              onChange={handleOnChange}
              value={formData.password}
            />
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <h4 className="font-bold text-sm">Password Again</h4>
            <input
              type="password"
              name="cpassword"
              className="border-[1px] border-zinc-400 rounded-sm outline-none px-2 py-1"
              onChange={handleOnChange}
              value={formData.cpassword}
            />
          </div>
          <button className="bg-[#FEBD69] py-1 px-3 w-full text-md font-semibold rounded-sm border-[1px] border-[#FFD978] hover:bg-[#FFD978] my-5">
              Continue
            </button>
            <Divider/>
            <div className="w-full flex justify-center text-sm mt-5 gap-1 items-center">
                <h2>Already have an account?</h2>
                <Link to={'/signin'} className="text-blue-500 font-medium">Sign In</Link>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
