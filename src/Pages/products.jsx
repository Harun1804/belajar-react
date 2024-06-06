import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    image: "/images/shoes-1.jpg",
    name: "Sepatu gaul",
    description: `Sepatu ini sangat cocok untuk anda yang ingin tampil beda`,
    price: "1.000.000"
  },
  {
    id: 2,
    image: "/images/shoes-2.jpg",
    name: "Sepatu santai",
    description: `Sepatu ini sangat cocok untuk anda yang ingin santai`,
    price: "500.000"
  },
  {
    id: 3,
    image: "/images/shoes-3.jpg",
    name: "Sepatu olahraga",
    description: `Sepatu ini sangat cocok untuk anda yang ingin olahraga`,
    price: "750.000"
  }
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price}/>
        </CardProduct>
      ))}
    </div>
  );
}

export default ProductsPage;