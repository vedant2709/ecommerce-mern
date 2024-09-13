import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import {  useSelector } from "react-redux";

function ProductSection() {
  const data = useSelector((state) => state);
  const categoryData = data.product.categoryData;
  console.log(categoryData)
  const array=Object.values(categoryData);
  const parray=array[0]
  console.log(parray)
  return (
    <div className="w-full min-h-[80vh] bg-zinc-200 px-10 py-5 flex shrink-1 gap-5 flex-wrap justify-center">
      {parray && parray.map((p,i)=>(
        <ProductCard key={i} products={p}/>
      ))}
    </div>
  );
}

export default ProductSection;
