import Button from "../Elements/Button";

const CardTotalPrice = (props) => {
  const { total } = props
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-4 mt-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Total Price</h2>
        <span className="text-lg font-bold text-gray-900">{total.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</span>
      </div>
      <Button classname="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Checkout </Button>
    </div>
  );
}

export default CardTotalPrice