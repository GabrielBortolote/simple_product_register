export default function Product({data}){
  return <div className="
    mb-3
    border-white
    border-2
  ">
    <p>Nome: {data.name}</p>
    <p>Valor: {data.value}</p>
    <p>Descrição: {data.description}</p>
  </div>
}