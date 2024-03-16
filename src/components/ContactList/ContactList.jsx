import css from './contactList.module.css';
import Contact from './Contact/Contact';
import PropTypes from 'prop-types';

const ContactList = ({ data, onDelete }) => {
  return (
    <ul className={css.list}>
      <Contact onDelete={onDelete} data={data} />
    </ul>
  );
};

ContactList.propTypes = {};

export default ContactList;
