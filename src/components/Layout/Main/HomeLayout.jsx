import React from 'react'
import { NavLink } from 'react-router-dom'
import { Boton } from '../../UI/Boton'

export const HomeLayout = () => {
  return (
    <body>
      <div id="home">
        <h1  id='form-title'>Bienvenido</h1>
        <NavLink to="/"><Boton className="btn-form" id="btn-regresar" text="Regresar" ></Boton></NavLink>
      </div>
    </body>
  )
}
