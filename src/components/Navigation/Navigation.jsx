import { UserMenu } from 'components/UserMenu/Usermenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedin } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedin = useSelector(selectIsLoggedin);

  return (
    <>
      <header>
        {isLoggedin ? (
          <>
            <NavLink to="/contacts">Contacts</NavLink>
            <UserMenu />
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
