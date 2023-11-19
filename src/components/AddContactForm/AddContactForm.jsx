import { useDispatch } from 'react-redux';
import { Label, Form, SubmitButton } from './AddContactForm.styled';
import { addContact } from 'redux/contacts/operations';

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
        {' '}
        Name:
        <input type="text" name="name" required />
      </Label>
      <Label>
        {' '}
        Phone:
        <input
          type="tel"
          name="number"
          required
          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          placeholder="000-00-00"
        />
      </Label>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};
