import React from "react";
import Select from "./Select";

export default function Filter() {
  function filtrar(){
    alert("sirvo");
  }
  return (
    <div>
      {" "}
      <Select
        funcion={filtrar}
        options={[
          { id: "AASC", name: "Asendente" },
          { id: "ADES", name: "Desendente" },
        ]}
        text={"opcion alfabetica"}
      />
    </div>
  );
}
