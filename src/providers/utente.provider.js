import React, { useReducer } from 'react'
import { UtenteContext } from '../contexts/utente.context'
import { utenteReducer } from '../reducers/utente.reducer'

// QUARTO PASSO
// Dalla riga 6 alle riga 16 sono istruzioni che devono essere ripetute ogni qual 
// volta si vuole realizzare un Provider (cambiando ovviamente le variabili opportune)
export const UtenteProvider = ({children}) => {

    const[utenteState, dispatch] = useReducer(utenteReducer,{})

    return (
        <UtenteContext.Provider value = {{utenteState,dispatch}}>
            {children}
        </UtenteContext.Provider>
    )
}