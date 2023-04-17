import { useParams } from "react-router-dom";
import "./Index.css"

const ProductItem = ({ productos, }) => {
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id == id);

  return (      
    
    <div className="cuadro">
      <img className="img" src={producto.image} alt="" width={200}/>
      <div className="marco">
        <h4 className="titulo">{producto.title}</h4>
      <h5>{producto.category}</h5>
      <p className="descr">{producto.description}</p>
      <p>$ {producto.price}</p>
      <p>rating: {producto.rating.rate}</p>
      </div>
      
    </div>
    
  );
};

export default ProductItem;