"use client";
import React, { useEffect, useState } from "react";
import { Data } from "../app/data";
import Product from "./Product";

function Products({ category }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    // Load data from the JSON file

    // Find the category matching the state and set items
    const foundCategory = Data.categories.find((cat) => cat.name === category);
    if (foundCategory) {
      setItems(foundCategory.items);
    }
  }, [category]);
  return (
    <div className=" grid grid-cols-2 w-full p-1 gap-1">
        {items.map((item,index)=>(
 <Product items={item} key={index} />
        ))}
     
    </div>
  );
}

export default Products;
