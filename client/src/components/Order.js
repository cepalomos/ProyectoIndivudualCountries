import React from 'react'
import Select from './Select'

export default function Order() {
  return (
    <div>
        <Select seleccion={({selector:"Asendete o desendente por nombre",options:[{id:1,name:"ASC"},{id:2,name:"DES"}]})}/>
        <Select seleccion={({selector:"mayor o menor por cantidad de poblacion",options:[{id:1,name:"Menor"},{id:2,name:"Mayor"}]})}/>
    </div>
  )
}
