import storage from 'redux-persist/lib/storage'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  key: 'phonebook',
  storage,
  blacklist: ['filter']
}