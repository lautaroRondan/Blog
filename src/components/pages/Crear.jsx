import React from 'react';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { Peticion } from '../../helpers/Peticion';
import Global from '../../helpers/Global';


const Crear = () => {

  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState("no enviado")
  const guardarArticulo = async (e) => {
    e.preventDefault();

    let nuevoArticulo = formulario;

    const { datos } = await Peticion(Global.url + "crear", "POST", nuevoArticulo);
    if(datos.status === "success"){
      setResultado("guardado");
    }else {
      setResultado("error");
    }

    const fileInput = document.querySelector("#file");

    if (datos.status === "success" && fileInput.files[0]) {
      setResultado("guardado");

      const formData = new FormData();
      formData.append('file0', fileInput.files[0]);

      const { subida } = await Peticion(Global.url + "subir-imagen/"+datos.articuloGuardado._id , "POST", formData, true);

      if(sibida.datos.status === "success"){
        setResultado("guardado");
      }else {
        setResultado("error");
      }
      
    } 
    

  }

  return (
    <div className='jumbo'>
      <h1>Crear articulo</h1>
      <strong>{resultado == "guardado" ? "Articulo guardado con exito" : ""}</strong>
      <strong>{resultado == "error" ? "Los datos proporcionasdos son incorrectos" : ""}</strong>

      <form className="formulario" onSubmit={guardarArticulo}>

        <div className="form-group">
          <label htmlFor='titulo'>Titulo</label>
          <input type="text" name='titulo' onChange={cambiado} />
        </div>

        <div className="form-group">
          <label htmlFor='Contenido'>Contenido</label>
          <textarea type="text" name='contenido' onChange={cambiado} />
        </div>

        <div className="form-group">
          <label htmlFor='file0'>Imagen</label>
          <input type="file" name="file0" id="file" />
        </div>

        <input type="submit" value="Guardar" className='btn btn-success' />
      </form>

    </div>
  )
}

export default Crear
