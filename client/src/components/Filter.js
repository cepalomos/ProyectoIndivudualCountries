import React from 'react'
import Select from './Select'

export default function Filter() {
  return (
    <div>
        <Select seleccion={({selector:"prueba",options:[{id:1,name:"opcion 1"},{id:2,name:"opcion 2"}]})}/>
        <Select seleccion={({selector:"prueba2",options:[{id:1,name:"opcion 1"},{id:2,name:"opcion 2"}]})}/>
    </div>
  )
}
