import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import s from './ContactList.module.css';

function ContactList({ contacts, filter }) {
  return (
    <ul className={s.list}>
      {contacts.map(contactsItem => (
        <ContactListItem
          key={contactsItem.id}
          id={contactsItem.id}
          name={contactsItem.name}
          number={contactsItem.number}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onVisibleFilter: PropTypes.func,
  onDeleteUser: PropTypes.func,
};

const visibleFilter = (filter, allContacts) => {
  const normalizedFilter = filter.toLowerCase();

  if (allContacts !== []) {
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  return { contacts: visibleFilter(filter, items), filter: filter };
};

export default connect(mapStateToProps, null)(ContactList);
