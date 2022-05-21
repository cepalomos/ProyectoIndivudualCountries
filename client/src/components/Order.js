import React from 'react'
import Select from './Select'
import "../css/Order.css";

export default function Order({funcion}) {
  return (
    <div className='order_contenedor'>
        <Select funcion={funcion} options={[{id:"AASC",name:"Asendente"},{id:"ADES",name:"Desendente"}]} text={"opcion alfabetica"}/>
        <Select funcion={funcion} options={[{id:"PASC",name:"Asendente"},{id:"PDES",name:"Desendente"}]} text={"opcion por poblacion"}/>
    </div>
  )
}
