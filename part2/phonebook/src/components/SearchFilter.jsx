function SearchFilter({ onChange, searchTerm }) {
  return (
    <div>
      <label htmlFor="search">filter shown with</label>
      <input id="search" type="text" value={searchTerm} onChange={onChange} />
    </div>
  );
}
export default SearchFilter;
