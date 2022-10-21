import React from "react";
import { useState, useEffect } from "react";
import { Peticion } from "../../helpers/Peticion";
import Global from "../../helpers/Global";
import Listado from "./Listado";

const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const { datos, cargando } = await Peticion(Global.url + "articulos", "GET");

    if (datos.status === "success") {
      setArticulos(datos.articulos);
    }
    
    setCargando(false);
  };

  return (
    <>
      {cargando ? "cargando..." :
        articulos.length >= 1 ?
          <Listado articulos={articulos} setArticulos={setArticulos} />
          : <h1>No hay articulos</h1>
          
      }
    </>
  );
};

export default Articulos;
