import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CountriesContext = createContext();

function CountriesContextProvider({ children }) {
  const [data, setData] = useState([]);

  const getData = async function () {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(function () {
    getData();
  }, []);

  return (
    <CountriesContext.Provider value={{ data, setData }}>
      {children}
    </CountriesContext.Provider>
  );
}

export default CountriesContextProvider;
