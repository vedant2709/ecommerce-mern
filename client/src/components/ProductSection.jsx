// import React, { useEffect } from "react";
// import ProductCard from "./ProductCard";
// import {  useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// function ProductSection() {
//   const {catid} =useParams();
//   const data = useSelector((state) => state);
//   console.log(data)
//   const categoryData = data.product.categoryData;
//   console.log(categoryData)
//   localStorage.setItem("categoryData", JSON.stringify(categoryData));

//   // Retrieve data from localStorage if it vanishes on refresh
//   const storedCategoryData = JSON.parse(localStorage.getItem("categoryData"));
//   const finalCategoryData = storedCategoryData;  // Use either from state or from localStorage

//   // Get products for the current category
//   const parray = finalCategoryData ? finalCategoryData[catid] : [];
//   console.log(parray)
//   return (
//     <div className="w-full min-h-[80vh] bg-zinc-200 px-10 py-5 flex shrink-1 gap-5 flex-wrap justify-center">
//       {parray && parray.map((p,i)=>(
//         <ProductCard key={i} products={p}/>
//       ))}
//     </div>
//   );
// }

// export default ProductSection;

import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductsByCategory } from "@/redux/slice/product";
import CircularProgress from "@mui/material/CircularProgress";

function ProductSection() {
  const { catid, catname } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const categoryData = data.product.categoryData;
  let isLoading=data.product.isLoading;

  // Fetch products on component mount or when catid changes
  useEffect(() => {
    if (!categoryData || !categoryData[catid]) {
      dispatch(fetchProductsByCategory(catid));
    }
  }, [catid, dispatch, categoryData]);

  const parray = categoryData ? categoryData[catid] : [];

  return (
    <div className="w-full min-h-[80vh] px-10 py-5 bg-zinc-200">
      <h1 className="text-center capitalize text-4xl mb-5 font-semibold">
        {catname}
      </h1>
      <div className="w-full min-h-[80vh]  flex shrink-1 gap-5 flex-wrap justify-center">
        {isLoading && <CircularProgress sx={{color:"#F3A847"}}/>}
        {parray && parray.map((p, i) => <ProductCard key={i} products={p} />)}
        
      </div>
    </div>
  );
}

export default ProductSection;
