import React, { useContext, useEffect } from "react";
import "./Country.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CountriesContext } from "../../context/CountriesContextProvider.jsx";

function Country() {
  const { name } = useParams();
  const { data } = useContext(CountriesContext);
  const countryData = data.find((country) => country.name.common === name);
  console.log(countryData);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = function () {
    navigate(-1);
  };

  const getFullName = function (borderingCountry) {
    const borderCountry = data?.find(
      (country) => country.cca3 === borderingCountry
    );
    return borderCountry.name.common;
  };

  return (
    <div className="country-details">
      <button className="back__btn" onClick={handleClick}>
        <span className="back__arrow">&#x27F5;</span>
        <span className="back__title">Back</span>
      </button>
      {countryData ? (
        <article className="article">
          <div className="article__left">
            <div className="article__img-container">
              <img
                className="article__img"
                src={countryData?.flags?.svg}
                alt={countryData?.flags?.alt}
              />
            </div>
          </div>
          <div className="article__right">
            <h1 className="article__title">{countryData?.name?.common}</h1>
            <div className="article__table">
              <div className="article__table--left">
                <ul className="table__list">
                  <li className="table__list-item">
                    <strong className="table__key">Native Name: </strong>
                    <span className="table__value">
                      {countryData?.name?.nativeName?.ron?.common}
                    </span>
                  </li>
                  <li className="table__list-item">
                    <strong className="table__key">Population: </strong>
                    <span className="table__value">
                      {countryData?.population}
                    </span>
                  </li>
                  <li className="table__list-item">
                    <strong className="table__key">Region: </strong>
                    <span className="table__value">{countryData?.region}</span>
                  </li>
                  <li className="table__list-item">
                    <strong className="table__key">Sub Region: </strong>
                    <span className="table__value">
                      {countryData?.subregion}
                    </span>
                  </li>
                  <li className="table__list-item">
                    <strong className="table__key">Capital: </strong>
                    <span className="table__value">{countryData?.capital}</span>
                  </li>
                </ul>
              </div>
              <div className="article__table--right">
                <ul className="table__list">
                  <li className="table__list-item">
                    <strong className="table__key">Top Level Domain: </strong>
                    <span className="table__value">{countryData?.tld}</span>
                  </li>
                  <li className="table__list-item">
                    <strong className="table__key">Currencies: </strong>
                    <span className="table__value">
                      {countryData?.currencies &&
                        Object.keys(countryData.currencies).map(
                          (currencyCode, index) => (
                            <span key={currencyCode}>
                              {countryData.currencies[currencyCode]?.name}
                              {index !==
                                Object.keys(countryData.currencies).length -
                                  1 && ", "}
                            </span>
                          )
                        )}
                    </span>
                  </li>
                  <li className="table__list-item">
                    <strong className="table__key">Languages: </strong>
                    <span className="table__value">
                      {countryData?.languages &&
                        Object.values(countryData.languages).join(", ")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="borders__container">
              {countryData?.borders && (
                <span className="table__key">Borders: </span>
              )}
              <div className="border__btn-container">
                {countryData?.borders &&
                  countryData.borders.map((borderingCountry, index) => (
                    <Link
                      className="borders__btn"
                      key={index}
                      to={`/country/${getFullName(borderingCountry)}`}
                    >
                      {getFullName(borderingCountry)}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </article>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Country;
