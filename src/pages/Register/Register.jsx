import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const Register = () => {
  const dispatch = useDispatch();
  function handleForm(event) {
    event.preventDefault();
    const name = event.currentTarget.name.value;
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    dispatch(register({ name, email, password }));
    event.currentTarget.reset();
  }
  return (
    <form onSubmit={handleForm}>
      <label>
        Name: <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required minLength={7} />
      </label>
      <button type="submit">Register now!</button>
    </form>
  );
};
export default Register;
