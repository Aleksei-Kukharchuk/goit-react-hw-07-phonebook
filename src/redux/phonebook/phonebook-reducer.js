import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import {
    addContactRequest,
    addContactSucess,
    addContactError,
    deleteContactRequest,
    deleteContactSucess, 
    deleteContactError,
    fetchContactsRequest,
    fetchContactsSucess,
    fetchContactsError,
    changeFilter,
} from './phonebook-actions';

const items = createReducer([], {
    [fetchContactsSucess]: (_, { payload }) => payload,
    [addContactSucess]: (state, { payload }) => 
        [{ name: payload.name, id: payload.id, number: payload.number }, ...state,],
    [deleteContactSucess]: (state, {payload}) => state.filter(contact => contact.id !== payload)
})

const filter = createReducer('', {
    [changeFilter]: (_, {payload}) => payload
})

const loading = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSucess]: () => false,
    [fetchContactsError]: () => false,
    [addContactRequest]: () => true,
    [addContactSucess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSucess]: () => false,
    [deleteContactError]: () => false,
})

export default combineReducers({items, filter, loading})