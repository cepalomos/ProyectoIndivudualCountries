import React from "react";
import Select from "./Select";

export default function Filter({opcionContinente,funcionContinente,funcionActividad,opcionActividad}) {
  return (
    <div>
      <Select
        funcion={funcionContinente}
        options={opcionContinente}
        text={"continentes"}
      />
      <Select
        funcion={funcionActividad}
        options={opcionActividad}
        text={"actividades"}
      />
    </div>
  );
}
