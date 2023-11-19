import { Button, Flex, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { SelectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(SelectUser);
  return (
    <Flex gap={'16px'} alignItems={'center'}>
      <Text fontSize={'20px'}>
        Welcome{' '}
        <Text as={'b'} textDecoration={'underline'}>
          {name}
        </Text>
      </Text>
      <Button
        type="button"
        onClick={() => dispatch(logout())}
        variant={'outline'}
        colorScheme={'green'}
      >
        logout
      </Button>
    </Flex>
  );
};
