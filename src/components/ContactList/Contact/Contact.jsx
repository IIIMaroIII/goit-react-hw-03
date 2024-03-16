import css from './contact.module.css';
import { IoIosContact } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Contact = ({ data, onDelete }) => {
  return data.map(({ id, name, number }) => {
    return (
      <li key={id} className={css.contact}>
        <div className={css.wrapper}>
          <p className={css.name}>
            <IoIosContact className={clsx(css.logo, css.contact)} />
            {name}
          </p>
          <p className={css.phone}>
            <FaPhoneAlt className={clsx(css.logo, css.phone)} />
            {number}
          </p>
        </div>

        <button
          onClick={() => {
            onDelete(id);
          }}
          className={css.btn}
          type="button"
        >
          Delete
        </button>
      </li>
    );
  });
};

Contact.propTypes = {};

export default Contact;
