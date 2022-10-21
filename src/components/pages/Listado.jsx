import React from 'react'
import { Link } from 'react-router-dom';
import Global from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';


const Listado = ({ articulos, setArticulos }) => {

    const eliminar = async (id) => {
        let { datos } = await Peticion(Global.url + "articulo/" + id, "DELETE");

        if (datos.status === "success") {
            let articulosActualizados = articulos.filter(articulo => articulo._id !== id);
            setArticulos(articulosActualizados);
        }
    }

    return (
        articulos.map((articulo) => {
            return (
                <article key={articulo._id} className="articulo-item">
                    <div className="mascara">
                        {articulo.imagen == "default.png" && <img src="https://media.tycsports.com/files/2021/11/01/353466/marcelo-gallardo_1440x810_wmk.jpg" />}
                        {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen} />}

                    </div>

                    <div className="datos">
                        <h3 className="title"><Link to={"/articulo/" + articulo._id}> {articulo.titulo}</Link></h3>
                        <p className="description">{articulo.contenido}</p>

                        <button className="edit"> <Link to={"/editar/" + articulo._id}>Editar </Link></button>
                        <button className="delete" onClick={() => {
                            eliminar(articulo._id)
                        }}> Borrar</button>
                    </div>
                </article>
            );
        })

    )
}

export default Listado
