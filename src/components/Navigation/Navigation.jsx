import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import { UserMenu } from 'components/UserMenu/Usermenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink as ReactRouterLink, Outlet } from 'react-router-dom';
import { selectIsLoggedin } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedin = useSelector(selectIsLoggedin);

  return (
    <>
      <header>
        <Box
          maxWidth={900}
          margin={[0, 'auto']}
          borderBottom="1px solid green"
          padding={'8px 0'}
        >
          <Flex w={'100%'}>
            {isLoggedin ? (
              <>
                <Button
                  as={ReactRouterLink}
                  to="/contacts"
                  variant={'outline'}
                  colorScheme={'green'}
                  sx={{
                    '&.active': {
                      backgroundColor: 'green',
                      color: 'white',
                    },
                  }}
                >
                  Contacts
                </Button>
                <Spacer />
                <UserMenu />
              </>
            ) : (
              <>
                <Button
                  as={ReactRouterLink}
                  to="/login"
                  marginRight={'24px'}
                  variant={'outline'}
                  colorScheme={'green'}
                  sx={{
                    '&.active': {
                      backgroundColor: 'green',
                      color: 'white',
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  as={ReactRouterLink}
                  to="/register"
                  variant={'outline'}
                  colorScheme={'green'}
                  sx={{
                    '&.active': {
                      backgroundColor: 'green',
                      color: 'white',
                    },
                  }}
                >
                  Register
                </Button>
              </>
            )}
          </Flex>
        </Box>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
