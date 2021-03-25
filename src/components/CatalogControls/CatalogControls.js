import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import searchIcon from '../../img/search.svg';
import filterIcon from '../../img/filter.svg';
import Wrapp from '../Wrapp/Wrapp';
import { filterBooksByPrice } from '../../store/actions/booksActions';

export default function CatalogControls() {
  const [filterText, setFilterText] = useState('');
  const [filterSelect, setFilterSelect] = useState('default');
  const dispatch = useDispatch();

  const filterByText = useCallback(({ target }) => {
    console.log(target.value);
    setFilterText(target.value);
  }, [setFilterText]);

  const filterByPrice = useCallback(({ target }) => {
    const { value } = target;
    setFilterSelect(value);
    dispatch(filterBooksByPrice(value));
  }, [setFilterSelect, dispatch]);

  return (
    <Wrapp>
      <div className="col-md-6 col-lg-3">
        <div className="input-group mb-4">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <img src={searchIcon} style={{ width: 15 }} alt="icon" />
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Find a book..."
            value={filterText}
            onChange={filterByText}
          />
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="input-group mb-4">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <img src={filterIcon} style={{ width: 15 }} alt="icon" />
            </div>
          </div>
          <select
            className="custom-select"
            value={filterSelect}
            onChange={filterByPrice}
          >
            <option value="default">Price...</option>
            <option value="to_25">&lt; 25</option>
            <option value="between">25 &lt; price &lt; 50</option>
            <option value="higher_50">&gt; 50</option>
          </select>
        </div>
      </div>
    </Wrapp>
  );
}
