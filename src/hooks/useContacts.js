import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'redux/contactsSlice';
import { getContacts, selectVisibleContacts } from 'redux/selectors';

export const useContacts = () => {
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const addContact = contact => dispatch(actions.addContact(contact));
  const deleteContact = id => dispatch(actions.deleteContact(id));

  return { contacts, filteredContacts, addContact, deleteContact };
};
