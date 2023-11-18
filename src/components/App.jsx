import { AddContactForm } from './AddContactForm/AddContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <AddContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
