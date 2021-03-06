import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import { useLocation } from 'react-router-dom';

const SearchForm = ({
  isShortMoviesChecked,
  onSearchQuerySubmit,
  savedMovies,
  ...props
}) => {
  const location = useLocation();
  const [isSearchQueryValid, setIsSearchQueryValid] = useState(true);
  const [searchQuery, setSearchQuery] = useState(() =>
    location.pathname === '/saved-movies'
      ? ''
      : localStorage.getItem('searchQuery') || ''
  );

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
    setIsSearchQueryValid(e.target.checkValidity());
  };

  const handleSearchQuerySubmit = (e) => {
    e.preventDefault();
    onSearchQuerySubmit(searchQuery);
  };

  useEffect(() => {
    if ((location.pathname === '/movies' && searchQuery) || location.pathname === '/saved-movies') {
      onSearchQuerySubmit(searchQuery);
    }

  }, [isShortMoviesChecked
    // , savedMovies
  ]);

  return (
    <section className="search-form">
      <form
        className="search-form__container"
        onSubmit={handleSearchQuerySubmit}
      >
        <div className="search-form__input-container">
          <div className="search-form__icon" />
          <input
            name="search"
            id="search"
            type="text"
            className="search-form__input"
            placeholder="Фильм"
            value={searchQuery}
            onChange={handleQueryChange}
            autoComplete="off"
            required
          />
          <button type="submit" className="search-form__button">
            Найти
          </button>
        </div>

        <div className="search-form__error-container">
          {!isSearchQueryValid && (
            <span className="search-form__error error">
              Нужно ввести ключевое слово
            </span>
          )}
        </div>

        {props.children}
      </form>
    </section>
  );
};

export default SearchForm;
