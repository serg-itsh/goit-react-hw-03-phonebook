import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

export const ContactList = ({ onContactList, onDelete }) => {
  return (
    <ul className={styles.list}>
      {onContactList.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
          id={id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
