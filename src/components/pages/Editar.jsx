import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Peticion } from '../../helpers/Peticion';
import Global from '../../helpers/Global';

const Editar = () => {
  const { formulario, enviado, cambiado } = useForm({});
  const [articulo, setArticulo] = useState({});
  const [resultado, setResultado] = useState("no enviado")
  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, []);

  const conseguirArticulo = async () => {
    const { datos } = await Peticion(Global.url + "articulo/" + params.id, "GET");

    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }

  };

  const editarArticulo = async (e) => {
    e.preventDefault();

    let nuevoArticulo = formulario;

    const { datos } = await Peticion(Global.url + "articulo/"+params.id, "PUT", nuevoArticulo);
    if (datos.status === "success") {
      setResultado("guardado");
    } else {
      setResultado("error");
    }

    const fileInput = document.querySelector("#file");

    if (datos.status === "success" && fileInput.files[0]) {
      setResultado("guardado");

      const formData = new FormData();
      formData.append('file0', fileInput.files[0]);

      const { subida } = await Peticion(Global.url + "subir-imagen/" + datos.articuloGuardado._id, "POST", formData, true);

      if (sibida.datos.status === "success") {
        setResultado("guardado");
      } else {
        setResultado("error");
      }

    }
  }

  return (
    <div className='jumbo'>
      <h1>Editar articulo</h1>
      <strong>{resultado == "guardado" ? "Articulo guardado con exito" : ""}</strong>
      <strong>{resultado == "error" ? "Los datos proporcionasdos son incorrectos" : ""}</strong>

      <form className="formulario" onSubmit={editarArticulo}>

        <div className="form-group">
          <label htmlFor='titulo'>Titulo</label>
          <input type="text" name='titulo' onChange={cambiado} defaultValue={articulo.titulo} />
        </div>

        <div className="form-group">
          <label htmlFor='Contenido'>Contenido</label>
          <textarea type="text" name='contenido' onChange={cambiado} defaultValue={articulo.contenido} />
        </div>

        <div className="form-group">
          <label htmlFor='file0'>Imagen</label>
          <div className="mascara">
            {articulo.imagen == "default.png" && <img src="https://media.tycsports.com/files/2021/11/01/353466/marcelo-gallardo_1440x810_wmk.jpg" />}
            {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen} />}
          </div>
          <input type="file" name="file0" id="file" />
        </div>

        <input type="submit" value="Guardar" className='btn btn-success' />
      </form>

    </div>
  )
}

export default Editar
