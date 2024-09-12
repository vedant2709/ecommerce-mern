import { fetchProductsByCategory, getProductDeals } from "@/redux/slice/product";
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";

function Slider() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const productDeals = data.product.productDeals;
  const categoryData=data.product.categoryData;
  console.log(categoryData);
  useEffect(() => {
    const fetchData = () => {
      dispatch(getProductDeals());
    };

    const getProductsByCategory=()=>{
        dispatch(fetchProductsByCategory('jra'));
    }
    fetchData();
    getProductsByCategory();
  }, [dispatch]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {productDeals.map((p, i) => {
          return (
            <div className="w-[13vw] h-[22vw]">
              <div className="w-full h-[70%]">
                <img src={p.url} alt="" className="w-full h-full" />
              </div>
              <div className="w-full h-[30%] p-2 flex justify-center flex-col items-start gap-1">
                <p className="text-xs text-center">{p.discount}</p>
                <p className="text-xs text-center">{p.tagline}</p>
                <p className="text-xs text-center">{p.title.shortTitle}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slider;
