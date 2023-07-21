import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { Label } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const { value } = e.target;
    dispatch(filterContacts(value));
  };

  return (
    <Label>
      Find contacts by name
      <input type="text" onChange={onChange} />
    </Label>
  );
};
