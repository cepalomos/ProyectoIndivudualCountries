import React from 'react';
import "../css/Select.css";

export default function Select({seleccion:{selector,options}}) {
  return (
    <>
        <select className='select_select'>
            <option key={0}>{`--Selecciona por ${selector}--`}</option>
            {options.length!==0&&options.map(({id,name})=>(<option key={id} value={name}>{name}</option>))}
        </select>
    </>
  )
}
