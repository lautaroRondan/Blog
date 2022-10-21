import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Peticion } from "../../helpers/Peticion";
import Global from "../../helpers/Global";
import Listado from "./Listado";

const Articulo = () => {
  const [articulo, setArticulo] = useState({});
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, []);

  const conseguirArticulo = async () => {
    const { datos, cargando } = await Peticion(Global.url + "articulo/" + params.id, "GET");

    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }

    setCargando(false);
  };

  return (
    <div className="jumbo">
      {cargando ? "cargando..." :
        
        <>
          <div className="mascara">
            {articulo.imagen == "default.png" && <img src="https://media.tycsports.com/files/2021/11/01/353466/marcelo-gallardo_1440x810_wmk.jpg" />}
            {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen} />}

          </div>
          
          <h1>{articulo.titulo}</h1>
          <p>{articulo.contenido}</p>
          
          </>
        
      }
    </div>
  );
};

export default Articulo;
