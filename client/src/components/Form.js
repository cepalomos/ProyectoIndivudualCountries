import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Form() {
  const [datos,setDatos] = useState("");

  return (
    <main className='form_contenedorPrincipal'>
      <form className='form_formulario'>
      <legend className='form_titulo'>Crear Actividad</legend>
        <label htmlFor='nombre' className='form_label'>Nombre de Actividad</label>
        <input id='nombre' className='form_text' onChange={({target:{value}})=>setDatos({...datos,nombre:value})} value={datos.nombre}/>
        <label htmlFor='dificultad' className='form_label'>Dificultad</label>
        <input type="range" min="0" max="5" step="1" id='dificultad' className='form_range' onChange={({target:{value}})=>setDatos({...datos,dificultad:parseInt(value)})}/>
        <label htmlFor='duracion' className='form_label'>Duracion en minutos</label>
        <input id='duracion' type="number" min={0} className='form_number'/>
        <label htmlFor='duracion' className='form_label'>Temporada</label>
        <input type="radio" />
      </form>
      <Link to={"/countries"}><button>Cancelar</button></Link>
    </main>
  )
}
