import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Error from "./Error";

export default function DetailCountry() {
  const { id } = useParams();
  const [country, setCountry] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3001/countries/${id}`)
      .then((res) => res.json())
      .then((res) => setCountry(res))
      .catch((error) => setError(error));
  }, []);
  const loading = <h1>Cargando</h1>;
  return (
    <main>
      <Link to={"/countries"}><button>Home</button></Link>
      <div className="detail_principal">
        {error.length === 0 && !country.hasOwnProperty("id") && loading}
        {error.length !== 0 && <Error></Error>}
        {error.length === 0 && country.hasOwnProperty("id") && (
          <>
            <div className="detail_contenedor_country">
              <h1 className="detail_tituloPrincipal">{country.nombre}</h1>
              <img src={country.imagen} alt={`Bandera ${country.nombre}`} />
              <article className="detail_countryDetail">
                <h3 className="detail_subtitulos">{`Continente: ${country.continente}`}</h3>
                <h3 className="detail_subtitulos">{`Capital: ${country.capital}`}</h3>
                <h3 className="detail_subtitulos">{`Subregion: ${country.subregion}`}</h3>
                <h3 className="detail_subtitulos">{`Area: ${country.area}`}</h3>
                <h3 className="detail_subtitulos">{`poblacion: ${country.poblacion}`}</h3>
              </article>
            </div>
            <div className="detail_actividades">
              <ul className="detail_actividades_lista">
                {country.activities.length !== 0 &&
                  country.activities.map(
                    ({ id, nombre, dificultad, duracion, temporada }) => (
                      <li id={id} className="datail_actividades_item">
                        <h3 className="detail_actividad_subtitulos">
                          {`Nombre de la actividad: ${nombre}`}
                        </h3>
                        <h3 className="detail_actividad_subtitulos">
                          {`Dificultad: ${dificultad}`}
                        </h3>
                        <h3 className="detail_actividad_subtitulos">
                          {`Duracion: ${duracion}`}
                        </h3>
                        <h3 className="detail_actividad_subtitulos">
                          {`Temporada: ${temporada}`}
                        </h3>
                      </li>
                    )
                  )}
              </ul>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
