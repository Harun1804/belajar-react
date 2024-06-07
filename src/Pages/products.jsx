import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import CardCart from "../components/Fragments/CardCart";
import CardTotalPrice from "../components/Fragments/CardTotalPrice";

const products = [
  {
    id: 1,
    image: "/images/shoes-1.jpg",
    name: "Sepatu gaul",
    description: `Sepatu ini sangat cocok untuk anda yang ingin tampil beda`,
    price: 1000000
  },
  {
    id: 2,
    image: "/images/shoes-2.jpg",
    name: "Sepatu santai",
    description: `Sepatu ini sangat cocok untuk anda yang ingin santai`,
    price: 500000
  },
  {
    id: 3,
    image: "/images/shoes-3.jpg",
    name: "Sepatu olahraga",
    description: `Sepatu ini sangat cocok untuk anda yang ingin olahraga`,
    price: 750000
  }
];

const email = localStorage.getItem('email')

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || [])
  }, [])

  useEffect(() => {
    let sum = 0;
    if (cart.length !== 0) {      
      sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id)
        return acc + product.price * item.qty
      }, 0);
    }

    setTotal(sum)
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const handleLogout = () => {
    localStorage.removeItem('email')
    window.location.href = '/login'
  }

  const handleAddToCart = (productId) => {
    if (cart.find((item) => item.id === productId)) {
      setCart(
        cart.map((item) => item.id === productId ? { ...item, qty: item.qty + 1 } : item)
      );
    } else {
      setCart([...cart, { id: productId, qty: 1 }])
    }
  }

  const handleRemoveFromCart = (productId) => {
    if (cart.find((item) => item.id === productId)) {
      setCart(
        cart.filter((item) => item.id !== productId)
      );
    }
  }

  return (
    <Fragment>
      <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="bg-black ml-5" onclick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} onAddCart={handleAddToCart} id={product.id}/>
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          {cart.map((item) => {
            const product = products.find((product) => product.id === item.id)
            return <CardCart key={item.id} image={product.image} name={product.name} price={product.price * item.qty} qty={item.qty} onRemoveCart={handleRemoveFromCart} id={product.id}/>
          })}
          <CardTotalPrice total={total}/>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductsPage;