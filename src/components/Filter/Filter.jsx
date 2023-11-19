import { Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatusFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const filterHandle = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <Input
      type="text"
      value={filter}
      onChange={filterHandle}
      margin={'0 auto'}
      marginTop={'24px'}
      w={230}
      display={'block'}
      colorScheme={'green'}
      placeholder="Find Contacts"
      _focusVisible={{ borderColor: 'green', boxShadow: '0 0 0 1px green' }}
    />
  );
};
