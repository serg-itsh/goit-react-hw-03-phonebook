import PropTypes from 'prop-types';
import styles from '../Form/Form.module.css';

export const Filter = ({ onHandlerFilter }) => {
  return (
    <form className={styles.formContacts}>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="name"
          onChange={onHandlerFilter}
        />
      </label>
    </form>
  );
};

Filter.propTypes = {
  onHandlerFilter: PropTypes.func.isRequired,
};
