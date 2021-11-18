import React, { useState } from "react";
import { SearchbarForm, SearchbarInput } from "./styled";
import { GoSearch } from "react-icons/go";

const Searchbar = () => {
  const [city, setCity] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (city) {
      console.log("searching weather in " + city);
      setCity("");
    }
  };

  return (
    <SearchbarForm onSubmit={handleSubmitForm}>
      <SearchbarInput
        type="text"
        placeholder="Enter the city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <GoSearch style={{ color: "#555" }} />
    </SearchbarForm>
  );
};

export default Searchbar;
