import React from 'react'
import {Link, Outlet} from 'react-router-dom';
import Filter from './Filter';
import Input from './Input';
import "../css/Navigator.css";
import Order from './Order';


export default function Navigator() {
  return (
      <>
    <nav className='navigator_contenedor'>
    <div className='navigator_selectores' >
    <Order/>
    <Filter/>
    </div>
    <Input/>
    </nav>
    <Outlet/>
    </>
  )
}
