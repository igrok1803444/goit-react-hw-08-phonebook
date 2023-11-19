import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedin } from 'redux/auth/selectors';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedin = useSelector(selectIsLoggedin);
  return isLoggedin ? <Navigate to={redirectTo} /> : Component;
};
