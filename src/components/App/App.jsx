import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from './App.styled';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'utils-style/Theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </ThemeProvider>
  );
};
