import Products from "./components/Products";

export default function Home() {
  return<>
    <div>
      <h1 className="text-2xl font-bold pb-8">
        Produtos
      </h1>
      <Products />
    </div>
  </>
}
