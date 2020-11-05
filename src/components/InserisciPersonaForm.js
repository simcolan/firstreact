import React from 'react'
import "./InserisciPersonaForm.css"

export const InserisciPersonaForm = ({id,nome,cognome,onChange,mostraPersona,updatePersona,edit}) => {
    return(
        <> 
        <label>Inserisci Nome:</label>
        <input
        type="text"
        name="nome"
        value={nome}
        onChange={(e)=>onChange(e)}
        />
        <label>Inserisci Cognome:</label>
        <input 
        type="text"
        name="cognome"
        value={cognome}
        onChange={(e)=>onChange(e)}
        />
        {edit ? (
        <button id="btnInsert" onClick={()=>updatePersona(id)}><strong>Modifica Persona</strong></button>
        ) : (
        <button id="btnInsert" onClick={()=>mostraPersona()}><strong>Inserisci Persona</strong></button>
        )}
        </>
    )
}