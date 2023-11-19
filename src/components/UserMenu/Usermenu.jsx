import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { SelectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(SelectUser);
  return (
    <div>
      <p>Welcome {name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        logout
      </button>
    </div>
  );
};
