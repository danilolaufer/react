import React from 'react'
import "./Inicio.css"

const Home = () => {
  return (
      <div>
        <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className='fondo' src="https://i.imgur.com/FRXWeuS.png"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>ROPA MUJER Y HOMBRE</h5>
        <p>Las mejores marcas y calidad</p>
      </div>
    </div>
    <div className="carousel-item">
      <img className='fondo'  src="https://i.imgur.com/WuJha8n.jpg"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>JUGUETERIA</h5>
        <p>Los mejores juguetes para tus niños con las mejores ofertas</p>
      </div>
    </div>
    <div className="carousel-item">
      <img className='fondo' src="https://i.imgur.com/WuJha8n.jpg"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>ELECTRODOMESTICOS</h5>
        <p>Renueva tu hogar</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

  )
}

export default Home;