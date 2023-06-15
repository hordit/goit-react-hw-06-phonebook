import PropTypes from 'prop-types';
import { DivWrapper, InputFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  }

  return (
    <DivWrapper>
      <label>
        Fined contacts by name
        <InputFilter type="text" value={filter} onChange={handleChange} />
      </label>
    </DivWrapper>
  );
};

Filter.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
