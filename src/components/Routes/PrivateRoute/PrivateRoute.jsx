import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthIsloading, selectIsLoggedin } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedin = useSelector(selectIsLoggedin);
  const isLoading = useSelector(selectAuthIsloading);
  const mustRedirect = !isLoading && !isLoggedin;
  console.log(mustRedirect);
  return mustRedirect ? <Navigate to={redirectTo} /> : Component;
};
