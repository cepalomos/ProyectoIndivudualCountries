import React from 'react';
import "../css/Landing.css";

export default function Landing() {
  return (
    <div className='landing_contenedor'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/b/b0/Mapamundi_tipografico_paises.svg'alt='Mapa mundial'className='landing_imagen'/>
      <a href='/countries' className='landing_boton'><button>Entrar</button></a>
    </div>
  )
}
