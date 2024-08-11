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
      group
      text-white text-sm
      bg-none
      `}>

      {/* description */}
      <p className={`
        z-20
        shadow-inner
        p-2
        flex-grow
        text-[14px]
        bg-bnexBlue
        rounded-t-md
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
        px-2 pt-2
        bg-[#1d0055]
      ">
        {data.name}
      </p>

      {/* value */}
      <p className="
        text-lg
        px-2 pb-2
        bg-[#1d0055]
        rounded-b-md
      ">
        <span className="mr-1">R$</span>{data.value}
      </p>
      
      {/* action buttons */}
      <div className="
        z-10
      text-bnexBlue text-md
        absolute
        top-0 right-0
        transition-transform
        group-hover:-translate-y-full
      ">
        <button onClick={toogleEditing} className="mr-1 hover:font-bold">Editar</button>|
        <button onClick={sendDelete} className="ml-1 hover:font-bold">Deletar</button>
      </div>
    </li>
  }
  </>
}