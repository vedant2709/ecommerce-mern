import React from "react";
import CarouselBanner from "./CarouselBanner";
import { Button, Divider } from "@mui/material";
import Slider from "./Slider";
import ProductCarousel from "./ProductCarousel";
import offerbanner from "../images/offer-banner.png";
import { Link } from "react-router-dom";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import c4 from "../images/c4.jpg";

function MainComponent() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This will give smooth scrolling
    });
  };
  return (
    <div className="w-full min-h-[calc(100%-70px)] bg-[#E3E6E6]">
      <CarouselBanner />

      <div className="w-full px-3 py-4 flex gap-3">
        <div className="w-[75%]  ">
          <div className="w-full bg-white rounded-md overflow-hidden">
            <div className="p-4 flex justify-between items-center font-semibold">
              <h2 className="text-xl">Deals Of the Day</h2>
              <Button variant="contained" size="small">
                View All
              </Button>
            </div>
            <Divider />
            <div className="caraousel w-full pt-4">
              <Slider />
            </div>
          </div>
        </div>

        <div className="w-[25%] p-4 bg-white rounded-md">
          <h2 className="text-center text-xl font-semibold">
            Festive Latest Launches
          </h2>
          <div className="w-full mt-5">
            <img
              src="https://m.media-amazon.com/images/G/31/IMG15/LA/Vach/HCTP/Topical_PCPO_REVISED.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <p className="text-[#007185] mt-2 text-center font-medium hover:text-[#c7511f] hover:cursor-pointer">
            See More
          </p>
        </div>
      </div>

      <div className="w-full px-3 py-4">
        <div className="w-full bg-white p-3 rounded-md">
          <h1 className="text-2xl mb-5 font-semibold">
            Curate Your Dream Home with Unique Décor Pieces
          </h1>
          <ProductCarousel category="arb" />
        </div>
      </div>

      <div className="w-[full] flex justify-center items-center py-5">
        <div className="w-[70vw] h-[60vh] bg-[#FFCBB6]">
          <img src={offerbanner} alt="" className="w-full h-full" />
        </div>
      </div>

      <div className="w-full px-3 py-4">
        <div className="w-full bg-white p-3 rounded-md">
          <h1 className="text-2xl mb-5 font-semibold">
            Find the Perfect Ride for Every Journey
          </h1>
          <ProductCarousel category="7dk" />
        </div>
      </div>

      <div className="w-full px-3 py-4 flex justify-between">
        <div className="w-[23vw] h-[28vw] p-4 bg-white">
          <h2 className="text-xl font-semibold h-[20%]">
            Upto 40% off | Mobile Accessories
          </h2>
          <div className="w-full h-[70%] bg-red-300 mb-2">
            <img src={c1} className="w-full h-full object-cover" alt="" />
          </div>
          <Link
            to={"/"}
            className="text-[#007185] hover:text-orange-700 text-sm font-medium"
          >
            See more
          </Link>
        </div>
        <div className="w-[23vw] h-[28vw] p-4 bg-white">
          <h2 className="text-xl font-semibold h-[20%]">
            Under ₹799 | Sports Combo Packs
          </h2>
          <div className="w-full h-[70%] bg-red-300 mb-2">
            <img src={c2} className="w-full h-full object-cover" alt="" />
          </div>
          <Link
            to={"/"}
            className="text-[#007185] hover:text-orange-700 text-sm font-medium"
          >
            See more
          </Link>
        </div>
        <div className="w-[23vw] h-[28vw] p-4 bg-white">
          <h2 className="text-xl font-semibold h-[20%]">
            Flat 30% off | Books
          </h2>
          <div className="w-full h-[70%] bg-red-300 mb-2">
            <img src={c3} className="w-full h-full object-cover" alt="" />
          </div>
          <Link
            to={"/"}
            className="text-[#007185] hover:text-orange-700 text-sm font-medium"
          >
            See more
          </Link>
        </div>
        <div className="w-[23vw] h-[28vw] p-4 bg-white">
          <h2 className="text-xl font-semibold h-[20%]">
            Under ₹599 on Amazon Prime Day | Games & Toys
          </h2>
          <div className="w-full h-[70%] bg-red-300 mb-2">
            <img src={c4} className="w-full h-full object-cover" alt="" />
          </div>
          <Link
            to={"/"}
            className="text-[#007185] hover:text-orange-700 text-sm font-medium"
          >
            See more
          </Link>
        </div>
      </div>

      <div className="w-full pt-12 pb-6 bg-white">
        <div className="w-full border-[1px] rounded-md">
          <div className="w-full py-4 flex justify-center items-center flex-col gap-2">
            <h2 className="text-sm font-medium">
              See personalized recommendations
            </h2>
            <button className="bg-[#FEBD69] py-1 px-3 text-sm font-semibold w-[18vw] rounded-sm border-[2px] border-[#FFD978] hover:bg-[#FFD978]">
              Sign in
            </button>
            <div className="text-xs flex gap-1 font-medium">
              <p>New Customer?</p>
              <Link to={'/signup'} className="text-[#007185] hover:text-orange-700">
                Start here.
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full bg-[#37475A] text-white text-sm font-medium flex justify-center hover:brightness-125 hover:cursor-pointer"
        onClick={scrollToTop}
      >
        <button className="py-4 ">Back to top</button>
      </div>
    </div>
  );
}

export default MainComponent;
