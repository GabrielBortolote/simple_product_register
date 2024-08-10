"use client";

import React, {useState} from "react";
import Products from "./components/Products";
import { createProduct } from "./adapters/APIAdapter";
import SideBar from "./components/SideBar";

export default function Home() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [needUpdate, setNeedUpdate] = useState(false);

  function toogleShowCreateForm(){
    setShowCreateForm(!showCreateForm)
  }

  function sendFormData(formData) {
 
    const product = {
      name: formData.get('name'),
      value: formData.get('value'),
      description: formData.get('description'),
    }

    createProduct(product).then(result => {
      setNeedUpdate(true);
      setShowCreateForm(false);
    })
  }

  return<>
    <div className='w-screen h-screen flex'>
      <SideBar />
      <h1 className="text-2xl font-bold pb-8">
        Produtos
      </h1>
      <Products needUpdate={needUpdate} setNeedUpdate={setNeedUpdate}/>
      <button onClick={toogleShowCreateForm}>
        Criar produto
      </button>
      {
        showCreateForm ? <>
          <form action={sendFormData}>
            <input type="text" name="name" placeholder="Insira o nome"/>
            <input type="number" name="value" placeholder="Insira o valor"/>
            <textarea name="description" placeholder="Insira a descrição"/>   
            <input type="submit" value="enviar" />
          </form>
        </> : <></>
      }
      {needUpdate ? <>Creating...</> : <></>}
    </div>
  </>
}
