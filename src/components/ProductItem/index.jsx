import { useParams } from "react-router-dom";

const ProductItem = ({ productos }) => {
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id == id);

  return (
    <div className="cuadro">
      <h4 className="titulo">{producto.title}</h4>
      <img className="img" src={producto.image} alt="" width={200}/>
      <h5>{producto.category}</h5>
      <p className="descr">{producto.description}</p>
      <p className="precio">$ {producto.price}</p>
      <p>rating: {producto.rating.rate}</p>
    </div>
  );
};

export default ProductItem;