import React, { useReducer } from 'react'
import { CarrelloContext } from '../contexts/carrello.context'
import { carrelloReducer } from '../reducers/carrello.reducer'

// QUARTO PASSO
// Dalla riga 6 alle riga 16 sono istruzioni che devono essere ripetute ogni qual 
// volta si vuole realizzare un Provider (cambiando ovviamente le variabili opportune)
export const CarrelloProvider = ({children}) => {

    const[carrelloState, dispatchCarrello] = useReducer(carrelloReducer,{})

    return (
        <CarrelloContext.Provider value = {{carrelloState,dispatchCarrello}}>
            {children}
        </CarrelloContext.Provider>
    )
}