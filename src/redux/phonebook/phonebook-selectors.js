import {createSelector} from '@reduxjs/toolkit'

const getContacts = state => state.phonebook.items;

const getValue = state => state.phonebook.filter;

const getVisiableTodos = createSelector([getContacts, getValue], (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getContacts,
    getValue,
    getVisiableTodos,
}