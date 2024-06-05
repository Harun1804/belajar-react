import InputForm from "../Elements/Input";
import Button from '../Elements/Button'

const FormLogin = () => {
  return (
    <form action="">
      <InputForm label="Email" type="email" name="email" textHolder="Example@mail.com"/>
      <InputForm label="Password" type="password" name="password" textHolder="*********"/>
      <Button classname="bg-blue-500 w-full text-white">Login</Button>
  </form>
  );
}

export default FormLogin