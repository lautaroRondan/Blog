import React from 'react'

const Contacto = () => {
  return (
    <div>
      <div className='jumbo'>
      <h1>Contcto</h1>

      <form className="formulario">

        <div className="form-group">
          <label htmlFor='titulo'>Nombre</label>
          <input type="text" name='nombre'/>
        </div>

        <div className="form-group">
          <label htmlFor='titulo'>Apellido</label>
          <input type="text" name='apellido'/>
        </div>

        <div className="form-group">
          <label htmlFor='Contenido'>Comentario</label>
          <textarea type="text" name='comentario' />
        </div>

        <input type="submit" value="Guardar" className='btn btn-success' />
      </form>

    </div>
    </div>
  )
}

export default Contacto
