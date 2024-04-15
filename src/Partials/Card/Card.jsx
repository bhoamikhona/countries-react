import React from "react";
import "./Card.css";

function Card({ name, pop, region, capital, alt, flag }) {
  return (
    <div className="card">
      <div className="card__img-container">
        <img src={flag} alt={alt} className="card__img" />
      </div>
      <div className="card__info-container">
        <h2 className="card__name">{name}</h2>
        <ul className="card__list">
          <li className="card__list-item">
            <strong className="card__stat">Population: </strong>
            <span className="card__stat-value">
              {Intl.NumberFormat().format(pop)}
            </span>
          </li>
          <li className="card__list-item">
            <strong className="card__stat">Region: </strong>
            <span className="card__stat-value">{region}</span>
          </li>
          <li className="card__list-item">
            <strong className="card__stat">Capital: </strong>
            <span className="card__stat-value">{capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
