import React from "react";

function HomeSectioncard({Product}) {
  return (
    <div
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg
    overflow-hidden w-[15rem] mx-3.5  "
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={Product.image}
          alt=""
        />
      </div>

      <div>
        <h1 className="text-lg font-medium text-gray-9000">{Product.title}</h1>
        <p className="mt-2 text-sm text-green-500 ">{Product.brand}</p>
      </div>
    </div>
  );
}

export default HomeSectioncard;
