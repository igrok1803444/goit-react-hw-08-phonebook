import { createSelector } from '@reduxjs/toolkit';

export const selectStatusFilter = state => state.filter.status;
export const selectContacts = state => state.contacts.contacts.items;

export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      if (filter.trim() === '') {
        return contacts;
      }
      return contact.name.toLowerCase().includes(filter.trim().toLowerCase());
    });
  }
);
