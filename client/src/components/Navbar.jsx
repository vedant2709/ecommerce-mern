import React from "react";
import logo from "../images/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-[70px] px-10 py-3 bg-zinc-900 flex items-center justify-between">
      <div className="w-[12vw]">
        <img src={logo} alt="" className="w-full" />
      </div>
      <div className="w-[35vw] bg-[#FEBD69] rounded-md flex items-center">
        <input
          type="text"
          placeholder="Search Your Products"
          className="p-2 px-3 w-[88%] rounded-l-md outline-none"
        />
        <div className="w-[12%] flex justify-center items-center">
          <i className="fa-solid fa-magnifying-glass text-xl"></i>
        </div>
      </div>
      <div className="flex gap-8 text-white  items-center">
        <Link to={'/signin'} className="text-xl font-semibold">Sign In</Link>
        <div className="flex items-end gap-1">
          <Badge badgeContent={4} color="primary">
            <i className="fa-solid fa-cart-shopping text-xl"></i>
          </Badge>

          <h2 className="text-sm">Cart</h2>
        </div>
        <Avatar>
          <AvatarImage />
          <AvatarFallback className="bg-zinc-700">
            <i class="fa-solid fa-user text-xl"></i>
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default Navbar;
