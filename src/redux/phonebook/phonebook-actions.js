import { createAction } from '@reduxjs/toolkit'

export const fetchContactsRequest = createAction('phonebook/fetchContactsRequest');
export const fetchContactsSucess = createAction('phonebook/fetchContactsSucess');
export const fetchContactsError = createAction('phonebook/fetchContactsError');

export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSucess = createAction('phonebook/addContactSucess');
export const addContactError = createAction('phonebook/addContactError');

export const deleteContactRequest = createAction('phonebook/deleteContactRequest');
export const deleteContactSucess = createAction('phonebook/deleteContactSucess');
export const deleteContactError = createAction('phonebook/deleteContactError');

export const changeFilter = createAction('phonebook/changeFilter');

/* // eslint-disable-next-line import/no-anonymous-default-export
export default {addContactRequest, addContactSucess, addContactError, deleteContact, changeFilter} */