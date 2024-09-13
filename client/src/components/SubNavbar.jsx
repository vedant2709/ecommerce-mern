import React, { useEffect, useState } from "react";
import nav from "../images/nav.jpg";
import { useDispatch } from "react-redux";
import { fetchProductsByCategory } from "@/redux/slice/product";
import { useNavigate } from "react-router-dom";

function SubNavbar() {
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const [catid,setcatid]=useState("tyy");
  
  useEffect(() => {
    if (catid) {
      // Fetch products by category and navigate to /products
      dispatch(fetchProductsByCategory(catid));
      navigate("/products");
    }
  }, [catid, dispatch, navigate]);
  return (
    <div className="w-full px-4 text-white bg-[#232F3E] flex items-center gap-10">
      <div className="left flex w-[70%] gap-6 text-sm justify-between items-center">
        <div className="flex gap-1 items-center">
          <i className="fa-solid fa-cart-shopping text-sm"></i>
          <h2>All</h2>
        </div>
        <button onClick={()=>setcatid('tyy')}>Mobiles</button>
        <button onClick={()=>setcatid('abc')}>Sports</button>
        <button onClick={()=>setcatid('bks')}>Books</button>
        <button onClick={()=>setcatid('qoc')}>Exercise & Fitness</button>
        <button onClick={()=>setcatid('rja')}>Home Cleaning</button>
        <button onClick={()=>setcatid('tng')}>Toys & Games</button>
      </div>
      <div className="right w-[30%]">
        <img src={nav} alt="" className="w-full object-cover"/>
      </div>
    </div>
  );
}

export default SubNavbar;
