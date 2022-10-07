import { connect } from 'react-redux';
import { onDeleteUser } from 'redux/phonebook/phonebook-actions';
import { PropTypes } from 'prop-types';
import s from './ContactListItem.module.css';

function ContactListItem({ id, name, number, onDeleteUser }) {
  return (
    <li className={s.item}>
      <p className={s.name}>
        {name}: {number}
      </p>
      <button
        className={s.delete}
        type="button"
        onClick={() => {
          onDeleteUser(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteUser: id => dispatch(onDeleteUser(id)),
  };
};

export default connect(null, mapDispatchToProps)(ContactListItem);
