"use client";

import React, {useState} from "react";
import { updateProduct, deleteProduct } from "../adapters/APIAdapter";
import UpdateProduct, {productCardClasses} from "./UpdateProduct";

const descriptionMaxSize = 140;



export default function Product({key, data, setNeedUpdate}){
  const [editing, setEditing] = useState(false);

  function toogleEditing(){
    setEditing(!editing)
  }

  function sendFormData(formData) {
    const productUpdatedData = {
      name: formData.get('name'),
      value: formData.get('value'),
      description: formData.get('description'),
    }

    updateProduct(data.id, productUpdatedData).then(result => {
      setEditing(false);
      setNeedUpdate(true);
    })
  }

  function sendDelete(){
    deleteProduct(data.id).then(result => {
      setNeedUpdate(true);
    })
  }

  return <>
  
  {
    editing ?
    <UpdateProduct action={sendFormData} data={data} /> :
    <li className={`
      ${productCardClasses}
      text-white text-sm 
      border-bnexBlue
     hover:border-bnexDarkBlue
    `}>
      {/* description */}
      <p className={`
        flex-grow
        text-[14px]
        my-2
        ${
          data.description.length > descriptionMaxSize ?
          "overflow-y-scroll pr-2" : ""
        }
      `}>
        {data.description}
      </p>

      {/* name */}
      <p className="
        text-lg font-bold
      ">
        {data.name}
      </p>

      {/* value */}
      <p className="text-lg">
        <span className="mr-1">R$</span>{data.value}
      </p>
      
      {/* action buttons */}
      <div className="
        text-bnexDarkBlue
        absolute
        top-0 right-0
        -translate-y-full
      ">
        <button onClick={toogleEditing} className="mr-1 hover:font-bold">Editar</button>|
        <button onClick={sendDelete} className="ml-1 hover:font-bold">Deletar</button>
      </div>
    </li>
  }
  </>
}