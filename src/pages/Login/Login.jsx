import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
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
    <Box maxWidth={900} margin={'0 auto'} marginTop={'24px'} padding={'8px 0'}>
      <form onSubmit={handleForm}>
        <FormControl
          width={'230px'}
          margin={'0 auto'}
          padding={'12px'}
          border={'1px solid green'}
          borderRadius={'16px'}
        >
          <FormLabel htmlFor="email">Email:</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            _focusVisible={{
              borderColor: 'green',
              boxShadow: '0 0 0 1px green',
            }}
          />
          <FormLabel htmlFor="password">Password:</FormLabel>
          <Input
            id="password"
            type="password"
            name="password"
            _focusVisible={{
              borderColor: 'green',
              boxShadow: '0 0 0 1px green',
            }}
          />
          <Button
            type="submit"
            margin={'0 auto'}
            marginTop={'8px'}
            display={'block'}
            variant={'outline'}
            colorScheme={'green'}
          >
            Login
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
export default Login;
