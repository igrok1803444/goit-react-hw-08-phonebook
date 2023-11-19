import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();

  function handleForm(event) {
    event.preventDefault();
    const password = event.currentTarget.password.value;
    const email = event.currentTarget.email.value;

    dispatch(login({ password, email }));
    event.currentTarget.reset();
  }
  return (
    <form onSubmit={handleForm}>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" minLength="7" required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
export default Login;
