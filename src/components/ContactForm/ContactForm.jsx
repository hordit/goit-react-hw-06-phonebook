import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import {
  ButtonAdd,
  FormStyled,
  InputStyled,
  Label,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts as addContact, getContacts } from 'redux/contactsSlice';
import { isExistName } from 'Utils/getVisibleContacts';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, actions) => {
   const {name, number} = values;

   if (!isExistName(name, contacts)) {
    dispatch(
      addContact({
        name, number,
        id: nanoid(),
      })
    );
   }
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label>
          Name
          <InputStyled
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <InputStyled
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <div>
          <ButtonAdd type="submit">Add contact</ButtonAdd>
        </div>
      </FormStyled>
    </Formik>
  );
};

