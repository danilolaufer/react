import Navbar from "./components/Navbar/Navbar";
import Prendas from "./components/Prendas/Prendas";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import ProductItem from "./components/ProductItem";


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio />} />  
        <Route path="/zapatillas" element={<Prendas />} />     
        <Route path="/zapatillas/:id" element={<ProductItem/>} />
        <Route path="*" element={<h2> 404</h2>} />  
      </Routes>
    </div>
  )
}

export default App;
