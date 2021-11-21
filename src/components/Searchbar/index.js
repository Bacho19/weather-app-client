import React, { useContext } from "react";
import { SearchCityContext } from "../../context/SearchCityContext";
import { SearchbarForm, SearchbarInput } from "./styled";
import { GoSearch } from "react-icons/go";

const Searchbar = ({ setSearchValue, handleSearchClick }) => {
  const searchValue = useContext(SearchCityContext);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (searchValue) {
      handleSearchClick(searchValue);
      setSearchValue("");
    }
  };

  return (
    <SearchbarForm onSubmit={handleSubmitForm}>
      <SearchbarInput
        type="text"
        placeholder="Enter the city"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <GoSearch style={{ color: "#555" }} />
    </SearchbarForm>
  );
};

export default Searchbar;
