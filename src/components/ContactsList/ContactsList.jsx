import { useDispatch, useSelector } from 'react-redux';
import { BallTriangle } from 'react-loader-spinner';
import { List, DeleteButton } from './ContactsList.styled';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';

import { useEffect } from 'react';
import { deleteContact, getContacts } from 'redux/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const visibleContacts = useSelector(selectVisibleContacts);

  function deleteHandler(id) {
    dispatch(deleteContact(id));
  }
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <>
      <List>
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
          <li key={id}>
            {name}: {number}
            <DeleteButton type="button" onClick={() => deleteHandler(id)}>
              delete
            </DeleteButton>
          </li>
        ))}
      </List>
    </>
  );
};
