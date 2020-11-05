import React, { useContext } from 'react'


// Dalla riga 6 alle riga 11 sono istruzioni che devono essere ripetute ogni qual 
// volta si vuole realizzare un Context (cambiando ovviamente le variabili opportune)
export const UtenteContext = React.createContext();

export const useUtente = () => {
    const contextValue = useContext(UtenteContext);
    return contextValue;
}