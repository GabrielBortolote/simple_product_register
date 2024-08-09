"use client";

import React, { useState, useEffect } from "react";
import Product from "./Product";
import { fetchProducts } from "../adapters/APIAdapter";

export default function Products({needUpdate, setNeedUpdate}){ 
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(null);
    fetchProducts().then(result => {
      setProducts(result);
    });
    return () => {setNeedUpdate(false)};
  }, [needUpdate]);

  return <ul>
    {products ? products.map((product, index) => (
      <li key={index}>
        <Product data={product} />
      </li>
    )) : 'Loading...'}
  </ul>
}