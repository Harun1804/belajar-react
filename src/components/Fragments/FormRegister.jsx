import InputForm from "../Elements/Input";
import Button from '../Elements/Button'

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Fullname" type="text" name="fullname" textHolder="Example"/>
      <InputForm label="Email" type="email" name="email" textHolder="Example@mail.com"/>
      <InputForm label="Password" type="password" name="password" textHolder="*********"/>
      <InputForm label="Confirm Password" type="password" name="confirmPassword" textHolder="*********"/>
      <Button classname="bg-blue-500 w-full text-white">Register</Button>
  </form>
  );
}

export default FormRegister