import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

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

const email = localStorage.getItem('email')

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem('email')
    window.location.href = '/login'
  }

  return (
    <Fragment>
      <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="bg-black ml-5" onclick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price}/>
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
}

export default ProductsPage;