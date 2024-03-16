import { useState, useEffect } from 'react';
import initialData from './components/data/initialData.json';
import Phonebook from './components/PhoneBook/PhoneBook';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import './App.css';

function App() {
  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState('');

  const filteredContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  const deleteContact = contactId => {
    setData(prevState => {
      return prevState.filter(({ id }) => id !== contactId);
    });
  };

  return (
    <>
      <Phonebook />
      <ContactForm />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList onDelete={deleteContact} data={filteredContacts} />
    </>
  );
}

export default App;
