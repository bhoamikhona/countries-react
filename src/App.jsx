import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async function () {
    try {
      setLoading(true);
      const res = await axios.get("https://restcountries.com/v3.1/all");

      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(function () {
    getData();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home countries={data} />} />
      </Routes>
    </div>
  );
}

export default App;
