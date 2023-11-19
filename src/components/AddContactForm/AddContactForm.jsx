import { useDispatch } from 'react-redux';
import { Label, Form } from './AddContactForm.styled';
import { addContact } from 'redux/contacts/operations';
import { Button } from '@chakra-ui/react';

export const AddContactForm = () => {
  const dispatch = useDispatch();

  const formHandler = event => {
    event.preventDefault();
    dispatch(
      addContact({
        name: event.target.name.value,
        number: numberEdit(event.target.number.value),
      })
    );
    event.target.reset();
  };
  const numberEdit = number => {
    const editingNumber = number.split('');
    editingNumber.splice(3, 0, '-');
    editingNumber.splice(6, 0, '-');
    return editingNumber.join('');
  };
  return (
    <Form onSubmit={formHandler}>
      <Label>
        Name:
        <input type="text" name="name" required />
      </Label>
      <Label>
        Phone:
        <input type="tel" name="number" required placeholder="000-00-00" />
      </Label>
      <Button
        margin={'0 auto'}
        display={'block'}
        variant={'outline'}
        colorScheme={'green'}
        type="submit"
      >
        Add contact
      </Button>
    </Form>
  );
};
