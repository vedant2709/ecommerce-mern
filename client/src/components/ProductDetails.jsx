import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct, removeSingleProduct } from "@/redux/slice/product";
import CircularProgress from "@mui/material/CircularProgress";
import { Divider } from "@mui/material";

function ProductDetails() {
  const { productid } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  var product = data.product.singleProduct[0];
  let isLoading = data.product.isLoading;
  console.log(isLoading);
  console.log(product);
  useEffect(() => {
    console.log("inside single")
      dispatch(fetchSingleProduct(productid));

    return () => {
      console.log("component unmounted");
      product=null;
      dispatch(removeSingleProduct());
    };
  }, [dispatch]);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center bg-white">
      <div className="w-full h-full  flex justify-center p-5">
        {isLoading && <CircularProgress sx={{ color: "#F3A847" }} />}
        {product && (
          <>
            <div className="left p-5 w-[35%] flex flex-col items-between justify-between">
              <div className="h-[80%] w-full">
                <img
                  src={product.images[0]}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className=" w-full flex justify-between">
                <button className="w-[15vw] text-sm py-[8px] rounded-full text-black font-medium bg-yellow-400">
                  Add to Cart
                </button>
                <button className="w-[15vw] text-sm py-[8px] rounded-full text-black font-medium bg-[#F3A847]">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="right w-[45%] min-h-full">
              <div className="border-2 p-3 min-h-full">
                <h3 className="text-3xl font-semibold">{product.brand}</h3>
                <h2 className="text-lg mt-1 font-medium mb-3">
                  {product.title}
                </h2>
                <Divider />
                <h3 className=" text-gray-500 font-medium mt-3">
                  M.R.P. :{" "}
                  <span className={`line-through`}>₹{product.mrp}</span>
                </h3>
                <h3 className=" text-gray-500 font-medium mt-3">
                  Special Price :{" "}
                  <span className={`text-orange-600 font-semibold`}>
                    ₹{product.price}
                  </span>
                </h3>
                <h3 className=" text-gray-500 font-medium mt-3 mb-3">
                  You Save :{" "}
                  <span className={`text-orange-600 font-semibold`}>
                    ₹{product.mrp - product.price}
                  </span>
                </h3>
                <Divider />
                <div className="mt-3 flex flex-col">
                  <h2>Highlights :</h2>
                  <div className="flex flex-col mt-3">
                    {product.highlights.slice(0, 5).map((p, i) => (
                      <li>{p}</li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
