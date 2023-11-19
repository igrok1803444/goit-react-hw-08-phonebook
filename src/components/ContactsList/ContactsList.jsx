import { useDispatch, useSelector } from 'react-redux';
import { BallTriangle } from 'react-loader-spinner';

import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';

import { deleteContact } from 'redux/contacts/operations';
import { Button, ListItem, UnorderedList } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const visibleContacts = useSelector(selectVisibleContacts);

  function deleteHandler(id) {
    dispatch(deleteContact(id));
  }

  return (
    <>
      <UnorderedList margin={'0 auto'} marginTop={'24px'} styleType={'none'}>
        {isLoading && (
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass=""
            wrapperStyle={{
              justifyContent: 'center',
            }}
            visible={true}
          />
        )}
        {error && <h1> Вибачте виникла помилка</h1>}
        {visibleContacts.map(({ name, id, number }) => (
          <ListItem key={id} margin={'0 auto'} width={'max-content'}>
            {name}: {number}
            <Button
              type="button"
              onClick={() => deleteHandler(id)}
              backgroundColor={'white'}
              color={'red'}
              border={'none'}
              _hover={{ backgroundColor: 'red', color: 'white' }}
            >
              <DeleteIcon fill={'currentcolor'} />
            </Button>
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
};
