const Button = (props) => {
  const {classname="bg-black", children="Button", onclick = () => {}, type=""} = props;
  return (
    <button className={`px-4 py-2 rounded ${classname}`} type={type} onClick={() => onclick()}>{children}</button>
  );
}

export default Button;