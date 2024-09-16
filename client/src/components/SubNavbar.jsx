import React, { useEffect, useState } from "react";
import nav from "../images/nav.jpg";
import { useDispatch } from "react-redux";
import { fetchProductsByCategory } from "@/redux/slice/product";
import { Link, useNavigate } from "react-router-dom";

function SubNavbar() {
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const [catid,setcatid]=useState("");
  const [catname,setcatname]=useState("");

  const handleCategoryChange=(id,name)=>{
    setcatid(id)
    setcatname(name)
  }
  
  useEffect(() => {
    if (catid) {
      // Fetch products by category and navigate to /products
      dispatch(fetchProductsByCategory(catid));
      navigate(`/products/${catid}/${catname}`)
    }
  }, [catid, dispatch, navigate]);
  return (
    <div className="w-full px-4 text-white bg-[#232F3E] flex items-center gap-10">
      <div className="left flex w-[70%] gap-6 text-sm justify-between items-center">
        <div className="flex gap-1 items-center">
          <i className="fa-solid fa-cart-shopping text-sm"></i>
          <h2>All</h2>
        </div>
        <button onClick={()=>handleCategoryChange('tyy','mobiles')}>Mobiles</button>
        <button onClick={()=>handleCategoryChange('abc','sports')}>Sports</button>
        <button onClick={()=>handleCategoryChange('bks','books')}>Books</button>
        <button onClick={()=>handleCategoryChange('qoc','exercise-fitness')}>Exercise & Fitness</button>
        <button onClick={()=>handleCategoryChange('rja','homecleaning')}>Home Cleaning</button>
        <button onClick={()=>handleCategoryChange('tng','toys-games')}>Toys & Games</button>
      </div>
      <div className="right w-[30%]">
        <img src={nav} alt="" className="w-full object-cover"/>
      </div>
    </div>
  );
}

export default SubNavbar;
