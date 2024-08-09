"use client";

import React, { useState, useEffect } from "react";
import Product from "./Product";

export default function Products(){ 
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(null);
    fetchProducts().then(result => {
      setProducts(result);
    });
    return () => {};
  }, []);

  return <ul>
    {products ? products.map((product, index) => (
      <li key={index}>
        <Product data={product} />
      </li>
    )) : 'Loading...'}
  </ul>
}

async function fetchProducts(){
  try {
    const response = await fetch('http://localhost:8000/product/');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
