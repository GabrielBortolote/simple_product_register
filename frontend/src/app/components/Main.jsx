"use client";

import React, { useState, useEffect } from "react";
import Product from "./Product";
import { fetchProducts } from "../adapters/APIAdapter";
import AddProduct from "./AddProduct";

export default function Main(){ 
  const [products, setProducts] = useState(null);
  const [needUpdate, setNeedUpdate] = useState(false);

  useEffect(() => {
    setProducts(null);
    fetchProducts().then(result => {
      setProducts(result);
    });
    return () => {setNeedUpdate(false)};
  }, [needUpdate]);

  return <div className="
    flex flex-col
    bg-bnexLight
    w-full h-auto
    p-8
    overflow-y-scroll
  ">
    <h1 className="text-4xl font-poppins text-bnexBlue font-bold pb-8">
      Produtos
    </h1>
    <ul className="
      flex
      flex-wrap
    ">
      <AddProduct setNeedUpdate={setNeedUpdate}/>
      {products ? products.map((product, index) => (
        <Product key={index} data={product} setNeedUpdate={setNeedUpdate}/>
      )) : 'Loading...'}
    </ul>
  </div>
}