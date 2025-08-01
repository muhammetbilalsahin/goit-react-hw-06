import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Ara..."
      value={filter}
      onChange={e => dispatch(changeFilter(e.target.value))}
    />
  );
}

export default SearchBox;
