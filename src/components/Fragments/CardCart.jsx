import Button from "../Elements/Button";

const CardCart = (props) => {
  const { image, name, price, qty, onRemoveCart, id } = props;
  return (
    <div className="max-w-lg mx-auto my-2 bg-white rounded-lg shadow-md shadow-gray-600 p-4 flex items-center space-x-4 ">
      {/* Thumbnail */}
      <div className="flex-shrink-0">
        <img className="h-16 w-16 object-cover rounded" src={image} alt="Product Thumbnail" />
      </div>
      {/* Product Info */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <div className="mt-2">
          <span className="block text-gray-700">Qty: {qty}</span>
          <span className="block text-gray-900 font-bold">{price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</span>
        </div>
      </div>
      {/* Button */}
      <div>
        <Button classname="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onclick={() => onRemoveCart(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default CardCart