import React from "react";

import Image from "next/image";
function Product({ items }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-xl  p-1 gap-y-2 shadow-lg">
      <div className="bg-gray-100 rounded-xl w-full flex justify-center items-center mb-2 overflow-hidden relative">
        <Image
          width={170}
          height={100}
          priority={true}
          // className="w-3/4 h-1/2"
          src={items.imageUrl}
          alt="Picture of the author"
        />
      </div>
      <div className="flex w-full justify-between text-orange-700 px-2 mb-1">
        <p className="text-gray-400">{items.name}</p>
      </div>
      <div className="flex w-full items-center text-sm p-1 px-2 mb-1">
        {items.ingredients}
      </div>
      <div className="flex w-full justify-center text-orange-700 px- mb-1">
        {items.price} تومان
      </div>

      <button className="text-orange-600 font-bold text-sm w-full border-t border-t-orange-400 hover:bg-orange-200 transition-all rounded-b-xl flex items-center justify-center p-2  cursor-pointer">
        مشاهده و سفارش
      </button>
    </div>
  );
}

export default Product;
