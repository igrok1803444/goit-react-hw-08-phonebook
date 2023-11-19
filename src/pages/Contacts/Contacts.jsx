import { Box } from '@chakra-ui/react';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <Box maxWidth={900} margin={[0, 'auto']} padding={'24px 0'}>
      <AddContactForm />
      <Filter />
      <ContactsList />
    </Box>
  );
};
export default Contacts;
