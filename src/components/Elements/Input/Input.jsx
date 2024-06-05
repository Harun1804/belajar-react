const Input = (props) => {
  const { type, placeHolder, name } = props;
  return (
    <input type={type} placeholder={placeHolder} className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" name={name} />
  );
}

export default Input;