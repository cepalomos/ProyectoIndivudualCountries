import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { peticionCountries } from "../redux/actions";
import Loading from "./Loading";
import CardCountry from "./CardCountry";
import "../css/Home.css";
import Error from "./Error";
import Pagination from "./Paginacion";
import {countriesPagination} from "../redux/actions";

export default function Home() {
  const { loading, countries, error,numberPages,currentPage,pagination } = useSelector((state) => state);
  const dispatch = useDispatch();
  let page = currentPage;
  useEffect(() => {
    dispatch(peticionCountries("http://localhost:3001/countries"));
  }, []);

  useEffect(()=>{
    dispatch(countriesPagination(countries.length,page));
  },[countries]);

  function buttonPagination(number,e){
    e.preventDefault();
    page = number;
    dispatch(countriesPagination(countries.length,page));
  }
  return (
    <main className="home_main">
      {loading && <Loading />}
      {!loading && error.length === 0 && pagination.length !== 0 && (
        <ul className="home_list">
          {pagination.map(({ id, nombre, imagen, continente }) => (
            <li key={id}>
              <CardCountry
                nombre={nombre}
                imagen={imagen}
                continente={continente}
              />
            </li>
          ))}
        </ul>
      )}
      {error.length > 0 && !loading && <Error className="home_error" />}
      {!loading && error.length===0 && numberPages.length!==0&&<Pagination className="home_pagination" pages={numberPages} currentPage={buttonPagination}/>}
    </main>
  );
}
