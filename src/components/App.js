import { useEffect, useRef } from 'react';

import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { connect } from 'react-redux';
import s from './App.module.css';

function App({ contacts }) {
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    return localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={s.container}>
      <h2>Phonebook</h2>
      <ContactForm />
      {contacts && contacts.length !== 0 && (
        <div>
          <h2>Contacts</h2>
          <Filter />

          <ContactList />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  const { items } = state.contacts;
  return { contacts: items };
};

export default connect(mapStateToProps, null)(App);
