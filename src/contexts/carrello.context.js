import React, { useContext } from 'react'


// Dalla riga 6 alle riga 11 sono istruzioni che devono essere ripetute ogni qual 
// volta si vuole realizzare un Context (cambiando ovviamente le variabili opportune)
export const CarrelloContext = React.createContext();

export const useCarrello = () => {
    const contextValue = useContext(CarrelloContext);
    return contextValue;
}