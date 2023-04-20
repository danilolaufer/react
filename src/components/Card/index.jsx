import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({ producto }) => {
  return (
    <Link to={`${producto.id}`}>
      <div className="fondo1">
        <h4 className="titulo">{producto.title}</h4>
        <img className="image" src={producto.image} alt="" width={200}/>
        <p className="precio">$ {producto.price}</p>
      </div>
    </Link>
  );
};

export default Card;