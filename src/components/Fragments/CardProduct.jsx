import { Link } from "react-router-dom";
import Button from '../Elements/Button'

const CardProduct = (props) => {
  const { children } = props
  return (
    <div className="w-full max-w-sm bg-gray-600 border border-gray-200 rounded-lg shadow mx-2">
      { children }
    </div>
  );
}

const Header = (props) => {
  const { image } = props
  return (
    <Link>
      <img src={image} alt="Product" className="p-8 rounded-t-lg"/>
    </Link>
  );
}

const Body = (props) => {
  const { children, title } = props
  return (
    <div className="px-5 pb-5">
      <Link>
        <h5 className="text-xl font-semibold tracking-tight text-white">
          { title }
        </h5>
        <p className="text-m text-white text-justify">
          { children }
        </p>
      </Link>
    </div>
  )
}

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">Rp. {price}</span>
      <Button classname="bg-blue-600 text-white">Add To Cart</Button>
    </div>
  )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;