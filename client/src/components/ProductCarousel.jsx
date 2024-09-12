import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fetchProductsByCategory } from "@/redux/slice/product";

function ProductCarousel({ category }) {
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.product.categoryData);

  useEffect(() => {
    const getProductsByCategory = () => {
      dispatch(fetchProductsByCategory(category));
    };
    getProductsByCategory();
  }, [dispatch, category]); // Add category to the dependency array

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

  // If categoryData[category] is undefined, return a loading or empty state
  const products = categoryData[category] || [];

  return (
    <div>
      {products.length > 0 ? (
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
          {products.map((p, i) => {
            return (
              <div className="w-[18vw] h-[28vw]" key={i}>
                <div className="w-full h-[80%]">
                  <img
                    src={p.images[0]} // Make sure 'images' array exists in the product
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-[20%] p-2 flex justify-center flex-col items-start gap-1">
                  <p className="text-sm text-center">{p.title.slice(0, 25)}...</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      ) : (
        <p>Loading products...</p> // Display a loading message if products are not available yet
      )}
    </div>
  );
}

export default ProductCarousel;
