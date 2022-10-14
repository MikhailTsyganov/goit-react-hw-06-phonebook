import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { connect } from 'react-redux';
import s from './App.module.css';

function App({ contacts }) {
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
