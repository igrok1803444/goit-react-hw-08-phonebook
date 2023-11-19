import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refresh } from 'redux/auth/operations';
import { Navigation } from './Navigation/Navigation';
import { PublicRoute } from './Routes/PublicRoute/PublicRoute';
import { PrivateRoute } from './Routes/PrivateRoute/PrivateRoute';

const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route
            path="contacts"
            element={<PrivateRoute component={<Contacts />} />}
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/contacts" component={<Register />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
