import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { selectStatusFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const filterHandle = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <Label>
      Find contact: <Input type="text" value={filter} onChange={filterHandle} />
    </Label>
  );
};
