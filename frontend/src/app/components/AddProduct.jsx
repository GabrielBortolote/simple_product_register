"use client";

import React, { useState } from "react";
import { createProduct } from "../adapters/APIAdapter";

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

  return <form action={sendFormData} className="
    w-[200px] h-[250px]
    border-dashed border-2 border-bnexDarkBlue rounded-sm
    shrink-0
    flex flex-col
    justify-center align-middle
  ">
      { 
        showForm ? 
        <>
          <input type="text" name="name" placeholder="Insira o nome"/>
          <input type="number" name="value" placeholder="Insira o valor"/>
          <textarea name="description" placeholder="Insira a descrição"/>   
          <input type="submit" value="enviar" />
        </> :
        <div onClick={() => setShowForm(true)}className="
          text-bold font-poppins text-bnexDarkBlue text-6xl
          self-center
          cursor-pointer
          hover:text-7xl
        ">
          +
        </div> 
      }
    </form>
}