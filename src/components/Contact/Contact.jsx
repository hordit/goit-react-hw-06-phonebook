import PropTypes from 'prop-types';
import { P, ButtonDelete, Div } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ contact: {id, name, number} }) => {

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Div>
      <P>
        {name}: {number}
      </P>
      <ButtonDelete aria-label="Delete" onClick={handleDelete}>
        Delete
      </ButtonDelete>
    </Div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
