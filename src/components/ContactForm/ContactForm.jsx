import { useDispatch } from 'react-redux';
import { addContact } from '../../Redux/contactsSlice';
import styles from './ContactForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();
    if (!name || !number) return;
    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input name="name" type="text" placeholder="İsim" />
      <input name="number" type="text" placeholder="Telefon" />
      <button type="submit">Ekle</button>
    </form>
  );
}

export default ContactForm;
