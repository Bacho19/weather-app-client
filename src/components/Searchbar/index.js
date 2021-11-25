import React, { useContext } from "react";
import { SearchCityContext } from "../../context/SearchCity";
import { SearchbarForm, SearchbarInput } from "./styled";
import { GoSearch } from "react-icons/go";
import PropTypes from "prop-types";

const Searchbar = ({ setSearchValue, handleSearchClick }) => {
  const searchCityValue = useContext(SearchCityContext);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      if (searchCityValue) {
        const cityCoordinates = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${searchCityValue}&limit=1&appid=51786ce34d39a0ce7acd07aef05848e4`
        ).then((data) => data.json());
        handleSearchClick(
          cityCoordinates[0].lat,
          cityCoordinates[0].lon,
          cityCoordinates[0].name
        );
        setSearchValue("");
      }
    } catch (e) {}
  };

  return (
    <SearchbarForm onSubmit={handleSubmitForm}>
      <SearchbarInput
        type="text"
        placeholder="Enter the city"
        value={searchCityValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <GoSearch style={{ color: "#555" }} />
    </SearchbarForm>
  );
};

Searchbar.propTypes = {
  setSearchValue: PropTypes.func,
  handleSearchClick: PropTypes.func,
};

export default Searchbar;
