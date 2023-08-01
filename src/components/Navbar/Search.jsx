import { AutoComplete, Input } from "antd";
import { CiSearch } from "react-icons/ci";

const Search = ({ setCity, city }) => {
  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleSearch = (e) => {
    const currentSearch = e.target.value;
    setCity(currentSearch);
  };

  return (
    <div className="searchContainer">
      <form className="search" onSubmit={handleForm}>
        <CiSearch type="submit" className="searchIcon" size={25} />
        <input
          className="searchInput"
          placeholder="Search city..."
          type="search"
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};

export default Search;
