"use client";

import React, { useState } from "react";
import { createProduct } from "../adapters/APIAdapter";
import UpdateProduct, {productCardClasses} from "./UpdateProduct";

export default function AddProduct({setNeedUpdate}){
  const [showForm, setShowForm] = useState(false);


  function sendFormData(formData) {
    const product = {
      name: formData.get('name'),
      value: formData.get('value'),
      description: formData.get('description'),
    }

    createProduct(product).then(result => {
      setNeedUpdate(true);
      setShowForm(false);
    })
  }

  return <>{ 
    showForm ?
      <UpdateProduct action={sendFormData}/>
    :
      <li onClick={() => setShowForm(true)} className={`
        text-6xl
        border-dashed border-2 border-bnexBlue
        ${productCardClasses}
        justify-center align-middle
        text-bold text-bnexBlue text-center
        cursor-pointer
        hover:text-7xl
        bg-transparent
      `}>
        +
      </li> 
  }</>
}