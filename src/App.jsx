import { useState } from 'react'
import Articulo from './components/pages/Articulo'
import Crear from './components/pages/Crear'
import Inicio from './components/pages/Inicio'
import { Rutas } from './routing/rutas'
import './index.css'


function App() {
  

  return (
    <div className="layout">
     <Rutas/>
    </div>
  )
}

export default App
