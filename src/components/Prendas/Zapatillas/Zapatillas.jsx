import {  useState} from "react";
import "./Zapatillas.css"
  const zapatillas = (props) => {
  return (
        <div className="">
          <div className="img">
            <img
              src={props.img}
              className="img"
              alt="articulos"
            />
          </div>
          <div className="fuente">
            <h4>{props.name}</h4>
            <p className="rol">{props.role}</p>
          </div>
        </div>
  );
};



export default zapatillas;