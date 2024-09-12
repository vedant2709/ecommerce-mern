import React from "react";
import CarouselBanner from "./CarouselBanner";
import { Button, Divider } from "@mui/material";
import Slider from "./Slider";
import ProductCarousel from "./ProductCarousel";
import offerbanner from "../images/offer-banner.png";

function MainComponent() {
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
    </div>
  );
}

export default MainComponent;
