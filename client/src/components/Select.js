import React from 'react';
import "../css/Select.css";

export default function Select({funcion,options,text}) {
  return (
    <>
        <select className='select_select' onChange={({target:{value}})=>funcion(value)}>
            <option key={0}>{`--Selecciona por ${text}--`}</option>
            {options.length!==0&&options.map(({id,name})=>(<option key={id} value={id}>{name}</option>))}
        </select>
    </>
  )
}
