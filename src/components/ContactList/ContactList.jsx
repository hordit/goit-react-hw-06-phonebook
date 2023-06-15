import { Contact } from 'components/Contact/Contact';
import { Li, Ul } from './ContactList.slyled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contactsSlice';
import { getVisibleContacts } from 'Utils/getVisibleContacts.jsx';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(filter, contacts);

  return (
    <Ul>
      {visibleContacts.map(contact => (
        <Li key={contact.id}>
          <Contact contact={contact} />
        </Li>
      ))}
    </Ul>
  );
};
