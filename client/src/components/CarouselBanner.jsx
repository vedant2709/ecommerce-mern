import React from "react";
import Carousel from "react-material-ui-carousel";

import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import banner4 from "../images/banner4.jpg";

function CarouselBanner() {
  const data = [banner1, banner2, banner3, banner4];
  return (
    <div className="w-full flex overflow-hidden justify-center">
      <Carousel
        className="w-full h-[55vh]"
        autoPlay={true}
        animation="fade"
        indicators={false}
        navButtonsAlwaysInvisible={true}
        cycleNavigation={true}
        stopAutoPlayOnHover={false}
        navButtonsProps={{
          style: {
            backgroundColor: "#ffff",
            color: "#494949",
            borderRadius: 0,
            marginTop:"-22px",
            height:"200px"
          },
        }}
      >
        {data.map((image, i) => {
          return (
            <div key={i}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselBanner;
