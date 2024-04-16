import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Country from "./pages/Country/Country.jsx";
import Header from "./components/Header/Header.jsx";
import { useContext } from "react";
import { CountriesContext } from "./context/CountriesContextProvider.jsx";

function App() {
  const { data } = useContext(CountriesContext);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home countries={data} />} />
        <Route path="/country/:name" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
