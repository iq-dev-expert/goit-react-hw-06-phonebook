import { nanoid } from 'nanoid';
import { Form } from 'components/ContactForm/ContactForm.styled';
import { Button } from 'utils-style/Template.styled';
import { useContacts } from 'hooks/useContacts';

export const ContactForm = () => {
  const { contacts, addContact } = useContacts();

  const onSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();

    if (isContactInPhonebook(name)) {
      alert(`${name} is already in contacts.`);
      form.reset();
      return;
    }

    addContact({ id, name, number });
    form.reset();
  };

  const isContactInPhonebook = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  return (
    <Form onSubmit={onSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
