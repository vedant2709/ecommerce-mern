import React from "react";
import nav from "../images/nav.jpg";

function SubNavbar() {
  return (
    <div className="w-full px-4 text-white bg-[#232F3E] flex items-center gap-10">
      <div className="left flex w-[70%] gap-6 text-sm justify-between items-center">
        <div className="flex gap-1 items-center">
          <i className="fa-solid fa-cart-shopping text-sm"></i>
          <h2>All</h2>
        </div>
        <h2>Mobiles</h2>
        <h2>Best Sellers</h2>
        <h2>Fashion</h2>
        <h2>Customer Service</h2>
        <h2>Electronics</h2>
        <h2>Prime</h2>
        <h2>Today's Deals</h2>
        <h2>Amazon Pay</h2>
      </div>
      <div className="right w-[30%]">
        <img src={nav} alt="" className="w-full object-cover"/>
      </div>
    </div>
  );
}

export default SubNavbar;
