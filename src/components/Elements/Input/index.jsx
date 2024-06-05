import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, type, textHolder, name } = props;
  return (
    <div className="mb-6">
      <Label htmlfor={name}>{label}</Label>
      <Input type={type} placeHolder={textHolder} name={name} />
    </div>
  );
}

export default InputForm;