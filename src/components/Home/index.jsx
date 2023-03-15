import React from 'react'
import "./Inicio.css"

const Home = () => {
  return (
      <div>
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className='fondo' src="../public/jaden.png"  alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>ROPA MUJER Y HOMBRE</h5>
        <p>Las mejores marcas y calidad</p>
      </div>
    </div>
    <div class="carousel-item">
      <img className='fondo'  src="../public/jaden2.png"  alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>JUGUETERIA</h5>
        <p>Los mejores juguetes para tus niños con las mejores ofertas</p>
      </div>
    </div>
    <div class="carousel-item">
      <img className='fondo' src="../public/jaden3.jpg"  alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>ELECTRODOMESTICOS</h5>
        <p>Renueva tu hogar</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

  )
}

export default Home;