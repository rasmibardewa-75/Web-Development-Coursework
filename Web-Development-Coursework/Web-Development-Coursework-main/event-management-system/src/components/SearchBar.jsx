function SearchBar() {
  return (
    <form>
      <label>Search Events:</label>
      <input
        type="text"
        placeholder="Enter event name..."
      />
      <input
        type="button"
        value="Search"
      />
    </form>
  );
}

export default SearchBar;