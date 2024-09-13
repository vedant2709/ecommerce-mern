import { Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="w-full bg-[#232F3E]">
      <div className="py-10 text-white flex justify-center gap-24">
        <div className="col-1 flex flex-col gap-2 items-start justify-start">
          <h2 className="text-xl font-bold mb-2">Get to know Us</h2>
          {["About Us", "Careers", "Press Releases", "Amazon Science"].map(
            (link, i) => (
              <Link
                key={i}
                className="text-sm font-medium hover:underline transition-all duration-75 w-fit opacity-85"
              >
                {link}
              </Link>
            )
          )}
        </div>
        <div className="col-2 flex flex-col gap-2 items-start justify-start">
          <h2 className="text-xl font-bold mb-2">Connect With Us</h2>
          {["Facebook", "Twitter", "Instagram"].map((link, i) => (
            <Link
              key={i}
              className="text-sm font-medium hover:underline transition-all duration-75 w-fit opacity-85"
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="col-3 flex flex-col gap-2 items-start justify-start">
          <h2 className="text-xl font-bold mb-2">Make Money With Us</h2>
          {[
            "Sell on Amazon",
            "Sell under Amazon Accelerator",
            "Protect and Build Your Brand",
            "Amazon Global Selling",
            "Suplly on Amazon",
            "Become an Affiliate",
            "Fulfilment by Amazon",
            "Advertise Your Products",
            "Amazon Pay on Merchants",
          ].map((link, i) => (
            <Link
              key={i}
              className="text-sm font-medium hover:underline transition-all duration-75 w-fit opacity-85"
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="col-4 flex flex-col gap-2 items-start justify-start">
          <h2 className="text-xl font-bold mb-2">Let Us Help You</h2>
          {[
            "Your Account",
            "Returns Centre",
            "Recalls and Product Safety",
            "100% Purchase Protection",
            "Amazon App Download",
            "help",
          ].map((link, i) => (
            <Link
              key={i}
              className="text-sm font-medium hover:underline transition-all duration-75 w-fit opacity-85"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
      <div className="sub-footer w-full flex justify-center gap-10 bg-[#131A22]">
        <div className="w-[10vw]">
          <img src={logo} alt="" className="w-full" />
        </div>
        <div className="w-[28vw] flex justify-center items-center flex-col gap-1">
          <div className="w-full flex justify-between items-center">
          {[
            "Conditions of Use and Sale",
            "Privacy Note",
            "Interest-Based Ads",
          ].map((link, i) => (
            <Link key={i} className="w-fit text-xs text-white font-medium hover:underline transition-all duration-75">
              {link}
            </Link>
          ))}
          </div>
          <p className="text-white text-xs">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
