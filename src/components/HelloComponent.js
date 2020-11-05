import React from 'react'
import './HelloComponent.css'

export const HelloComponent = ({ id, nome, cognome, eliminaPersona, modificaPersona }) => {
    return (
        <div className="containerHelloComponent">
            <h1> {id} CIAO sono {nome} {cognome}</h1>
            <button id="btnElimina" onClick={() => eliminaPersona(id)}>
                <strong>Elimina</strong></button>
            <button id="btnModifica" onClick={() => modificaPersona(id)}>
                <strong>Modifica</strong></button>
        </div>
    )
}