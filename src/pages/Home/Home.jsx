import React from "react";
import "./Home.css";
import "./Home.css";
import Card from "../../Partials/Card/Card.jsx";
import FilterBar from "../../components/FilterBar/FilterBar.jsx";

function Home({ countries }) {
  return (
    <>
      <FilterBar />
      <main className="main">
        {countries.map(
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
