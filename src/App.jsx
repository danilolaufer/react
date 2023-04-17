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
import Loading from "./components/Loading/Loading";
import db from "../db/firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, "items");

  const getItems = async () => {
    const itemsCollection = await getDocs(itemsCollectionRef);
    setItems(
      itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getItems();
  }, []);


  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductos(res);
  };


  useEffect(() => {
    const getProducts =async () => {
      const response = await fetch ("https://fakestoreapi.com/products")
      const data = await response.json();
      setProductos(data)    
      setLoading(false)
      }
    getProducts();
    getProductos();
    
  }, []);
  if (loading) {
    return <Loading/>
  }
  return (
    <div>
      <div>
          {items.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
        </div>
         
      <Navbar />
      {/* <h3 className="bienvenido">Bienvenido/a</h3> */}
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