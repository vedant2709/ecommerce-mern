import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

function ProductCard({ products }) {
  return (
    <Link>
      <div className="group w-[20vw] h-[25vw] bg-white rounded-md overflow-hidden shadow-md">
        <div className="w-full h-[60%] bg-white">
          <img
            src={products.images[0]}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full h-[40%] px-3 py-2">
          <h2 className="text-sm group-hover:text-[#D2511F]">{products.title.slice(0, 25)}...</h2>
          <h2 className="text-xs font-semibold mt-2 text-blue-600">
            {products.brand}
          </h2>
          <div className="mt-2 flex items-end gap-2">
            <h2 className="font-semibold">
              <sup>₹</sup>
              {products.price}.00
            </h2>
            <h2 className="text-xs line-through">₹{products.mrp}.00</h2>
          </div>
          <div className="mt-2 flex gap-3 items-center">
            <Rating
              name="read-only"
              value={products.rating.average}
              readOnly
              precision={0.1}
            />
            <p className="text-sm">{products.rating.reviewCount}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
