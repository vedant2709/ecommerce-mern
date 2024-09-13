import React, { useState } from "react";
import blacklogo from "../images/blacklogo.png";
import { Link } from "react-router-dom";

function Signin() {
  const [formData,setformData]=useState({
    email:"",
    password:"",
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
        <h2 className="text-2xl font-semibold">Sign-In</h2>
        <form action="" className="mt-5">
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
            <h4 className="font-bold text-sm">Password</h4>
            <input
              type="password"
              name="password"
              className="border-[1px] border-zinc-400 rounded-sm outline-none px-2 py-1"
              onChange={handleOnChange}
              value={formData.password}
            />
          </div>

          <button className="bg-[#FEBD69] py-1 px-3 w-full text-md font-semibold rounded-sm border-[1px] border-[#FFD978] hover:bg-[#FFD978] mt-5 shadow-md">
            Continue
          </button>
        </form>
      </div>
      <h2 className="mt-5 font-bold text-slate-400">New to Amazon?</h2>
      <Link
        to={"/signup"}
        className="py-[6px] text-center shadow-md font-semibold bg-zinc-100 rounded-sm w-1/3 mt-5"
      >
        Create Your Amazon Account
      </Link>
    </div>
  );
}

export default Signin;
