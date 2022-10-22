import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const [buscar, setBuscar] = useState("");
    const navegar = useNavigate();

    const hacerBusqueda = (e) => {
        e.preventDefault();
        let miBusqueda = e.target.search_field.value;
        navegar("/buscar/"+miBusqueda, {replace: true});
    }

    return (
        <aside className="lateral">
            <div className="search">
                <h3 className="title">Busacador</h3>
                <form onSubmit={hacerBusqueda}>
                    <input type="text" name='search_field' />
                    <input type="submit" id="search" value="Buscar" />
                </form>
            </div>
        </aside>
    )
}

export default Sidebar
