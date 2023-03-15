import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductItem from "./components/ProductItem";
import Hombre from "./components/pages/Hombre/Hombre";
import Joyas from "./components/pages/Joyas/Joyas";
import Electronica from "./components/pages/Electronica/Electronica";
import Mujer from "./components/pages/Mujer/Mujer";

function App() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductos(res.data);
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/productos"
          element={<ProductList productos={productos} />}
        />
        <Route
          path="/productos/:id"
          element={<ProductItem productos={productos} />}
        />
        <Route path="/hombre" element={<Hombre productos={productos} />} />
        <Route path="/joyas" element={<Joyas productos={productos}/>} />
        <Route path="/electronica" element={<Electronica productos={productos}/>} />
        <Route path="/mujer" element={<Mujer productos={productos} />} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </div>
  );
}

export default App;