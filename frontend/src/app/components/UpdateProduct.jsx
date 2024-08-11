export const productCardClasses = `
  relative
  w-[200px] h-[250px]
  shrink-0
  font-poppins
  flex flex-col
  border-4
  mx-2 my-6
`;

export default function UpdateProduct({action, data}){
  return <form action={action} className={`
    ${productCardClasses}
    text-bnexDarkBlue 
    p-2
    bg-bnexBlue
  `}>
    {/* Description */}
    <textarea
      name="description"
      maxLength={500}
      placeholder="Insira a descrição"
      defaultValue={data ? data.description : ""}
      className="
        flex-grow
        my-4 p-1
        resize-none
      "
    />   

    {/* Product Name */}
    <input 
      type="text"
      name="name"
      maxLength={33}
      placeholder="Insira o nome"
      defaultValue={data ? data.name : ""}
      className="
        bg-transparent
        border-[1px] border-white border-dashed
        text-lg font-bold text-white
        px-1
        mb-1
      "
    />

    {/* Product value */}
    <div className="
      flex w-full
      text-lg text-white
    ">
      R$
      <input
        type="number"
        step="0.01"
        name="value"
        placeholder="Insira o valor"
        defaultValue={data ? data.value : ""}
        className="
          w-full
          text-sm
          ml-1
          flex-grow
          bg-transparent
          border-[1px] border-white border-dashed
          px-1
        "
      />
    </div>

    {/* Submit button */}
    <input
      type="submit"
      value="Enviar"
      className="
        absolute top-0 right-0
        -translate-y-full
        text-bnexBlue
        hover:font-bold
        cursor-pointer
      "
    />
  </form>
}