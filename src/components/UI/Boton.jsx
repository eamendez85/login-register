import React from 'react'

export const Boton = ({id, event, className, text}) => {
  return (
    <button id={id} onClick={event} className={className}>{text}</button>
  )
}
