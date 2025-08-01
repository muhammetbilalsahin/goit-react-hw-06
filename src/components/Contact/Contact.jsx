import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/contactsSlice';
import styles from './Contact.module.css';

function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li className={styles.item}>
      {contact.name}: {contact.number}
      <button onClick={handleDelete}>Sil</button>
    </li>
  );
}

export default Contact;