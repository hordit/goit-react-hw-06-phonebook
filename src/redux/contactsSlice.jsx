import { createSlice } from '@reduxjs/toolkit';
import contactsData from '../Data/Contacts.json';
import { nanoid } from 'nanoid';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

const initialState = {
  items: contactsData,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContacts(state, { payload }) {
      const { name, number } = payload;
      state.items.push({ id: nanoid(), name, number });
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const { addContacts, deleteContact, setFilter } = contactsSlice.actions;
