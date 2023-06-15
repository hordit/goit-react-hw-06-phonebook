import { capitalizedName } from './capitalizedName';

export const getVisibleContacts = (filterName, contacts) => {
  const normalizedFilter = filterName.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const isExistName = (name, contacts) => {
  const normalizedName = name.toLowerCase();
  const existName = contacts.find(
    contact => contact.name.toLowerCase() === normalizedName
  );
  if (existName) {
    alert(`${capitalizedName(name)} is already in contacts`);
    return true;
  }
};
