import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilterValue } from 'redux/selectors';
import { List } from 'components/ContactList/ContactList.styled';
import { Button } from 'utils-style/Template.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filterContacts = () => {
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  return (
    <List>
      {filterContacts().map(({ id, name, number }) => {
        const onDeleteButtonClick = () => dispatch(deleteContact(id));

        return (
          <li key={id}>
            <p>
              {name}: {number}{' '}
            </p>
            <Button type="button" onClick={onDeleteButtonClick}>
              Delete
            </Button>
          </li>
        );
      })}
    </List>
  );
};
