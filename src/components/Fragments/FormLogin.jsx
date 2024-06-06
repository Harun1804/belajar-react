import InputForm from "../Elements/Input";
import Button from '../Elements/Button'

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    window.location.href = '/products';
  }

  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" type="email" name="email" textHolder="Example@mail.com"/>
      <InputForm label="Password" type="password" name="password" textHolder="*********"/>
      <Button classname="bg-blue-500 w-full text-white" type="submit">Login</Button>
  </form>
  );
}

export default FormLogin