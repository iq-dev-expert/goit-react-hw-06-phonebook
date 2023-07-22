import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;

export const getFilterValue = state => state.filter;

export const selectVisibleContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) => {
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  }
);
