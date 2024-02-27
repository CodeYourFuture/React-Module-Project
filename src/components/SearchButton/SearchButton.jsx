const SearchButton = (props) => {
  return (
    <button
      className="button search__button"
      onClick={(e) => {
        e.preventDefault();
        props.click(props.input);
      }}
    >
      Search
    </button>
  );
};

export default SearchButton;
