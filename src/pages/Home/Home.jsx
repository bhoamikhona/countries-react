import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import "./Home.css";
import Card from "../../Partials/Card/Card.jsx";
import FilterBar from "../../components/FilterBar/FilterBar.jsx";
import { CountriesContext } from "../../context/CountriesContextProvider.jsx";

function Home() {
  const { data: countries } = useContext(CountriesContext);

  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleSearch = function (searchCountry) {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  return (
    <>
      <FilterBar onSearch={handleSearch} />
      <main className="main">
        {filteredCountries.map(
          ({
            name: { common },
            population,
            region,
            capital,
            flags: { alt, svg },
          }) => (
            <Card
              key={common}
              name={common}
              pop={population}
              region={region}
              capital={capital}
              alt={alt}
              flag={svg}
            />
          )
        )}
      </main>
    </>
  );
}

export default Home;
