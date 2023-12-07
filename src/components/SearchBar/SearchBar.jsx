import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearchInput = e => {
    const { value } = e.currentTarget;

    setQuery(value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!query.trim()) {
      toast.info('Будь ласка, напишіть свій запит', {
        autoClose: 2000,
      });
      return;
    }
    onSearch(query);
    resetForm();
  }

  const resetForm = () => setQuery('');

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleSearchInput}
          autoComplete="off"
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
