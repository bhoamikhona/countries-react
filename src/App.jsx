import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Country from "./pages/Country/Country.jsx";
import Header from "./components/Header/Header.jsx";

export const formatNumber = (number) => Intl.NumberFormat().format(number);

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
