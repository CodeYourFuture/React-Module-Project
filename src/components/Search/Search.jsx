import React from "react";
import SearchButton from "../SearchButton/SearchButton";
import "./Search.scss";

const Search = () => (
  <section className="search">
    <header className="search__header">
      <h4 className="search__heading heading">Search Bookings</h4>
    </header>
    <form className="search__form">
      <label className="search__label" htmlFor="customerName">
        &rarr;
      </label>
      <input
        type="search"
        id="customerName"
        className="search__input"
        placeholder="Customer name"
      />
      <SearchButton />
    </form>
  </section>
);

export default Search;
