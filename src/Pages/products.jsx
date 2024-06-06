import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu gaul">
          Sepatu ini sangat cocok untuk anda yang ingin tampil beda
        </CardProduct.Body>
        <CardProduct.Footer price="1.000.000"/>
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu keren">
          Sepatu ini sangat cocok untuk anda yang ingin tampil beda
        </CardProduct.Body>
        <CardProduct.Footer price="2.000.000"/>
      </CardProduct>
    </div>
  );
}

export default ProductsPage;