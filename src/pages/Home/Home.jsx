import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import "./Home.css";
import FilterBar from "../../components/FilterBar/FilterBar.jsx";
import Card from "../../Partials/Card/Card.jsx";

function Home({ countries }) {
  return (
    <>
      <Header />
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
