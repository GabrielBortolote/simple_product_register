"use client";

import React, {useState} from "react";
import { updateProduct, deleteProduct } from "../adapters/APIAdapter";

export default function Product({data, setNeedUpdate}){
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

  return <div className="
    mb-3
    border-white
    border-2
  ">
    {editing ? <>
      <form action={sendFormData}>
        <input type="text" name="name" placeholder="Insira o nome" defaultValue={data.name}/>
        <input type="number" name="value" placeholder="Insira o valor" defaultValue={data.value}/>
        <textarea name="description" placeholder="Insira a descrição" defaultValue={data.description}/>   
        <input type="submit" value="editar" />
      </form>
    </> : <>
      <p>Nome: {data.name}</p>
      <p>Valor: {data.value}</p>
      <p>Descrição: {data.description}</p>
      <button onClick={toogleEditing}>Edit</button>
      <button onClick={sendDelete}>Delete</button>
    </>}
  </div>
}