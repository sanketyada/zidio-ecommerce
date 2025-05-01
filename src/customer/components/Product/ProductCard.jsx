import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({Product}) {
  const navigate =useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className="ProductCard w-[15rem] m-3 transition-all cursor-pointer text-black">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={Product.image}
          alt="Product"
        />
      </div>

      <div className="textPart bg-white p-3 space-y-2">
        <div>
          <p className="font-bold opacity-60 text-sm">{Product.brand}</p>
          <p className="text-lg font-medium">{Product.title}</p>
        </div>

        <div className="flex items-center space-x-2">
          <p className="font-semibold">{Product.selling_price}</p>
          <p className="line-through opacity-50">{Product.price}</p>
          <p className="text-green-600 font-semibold">{Product.disscount}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

