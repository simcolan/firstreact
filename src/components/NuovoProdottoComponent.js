import React from 'react'
import "./NuovoProdottoComponent.css"

export const NuovoProdottoComponent = ({ titolo, descrizione, prezzo, immagine, onChange, aggiungiProdotto}) => {
    return(
        <> 
        <label>Inserisci Titolo:</label>
        <input
        type="text"
        name="titolo"
        value={titolo}
        onChange={(e)=>onChange(e)}
        />
        <label>Inserisci Descrizione:</label>
        <input 
        type="text"
        name="descrizione"
        value={descrizione}
        onChange={(e)=>onChange(e)}
        />
        <label>Inserisci prezzo:</label>
        <input 
        type="text"
        name="prezzo"
        value={prezzo}
        onChange={(e)=>onChange(e)}
        />
        <label>Inserisci url Immagine:</label>
        <input 
        type="text"
        name="immagine"
        value={immagine}
        onChange={(e)=>onChange(e)}
        />
        <button id="btnAggiungi" onClick={()=>aggiungiProdotto()}><strong>Aggiungi Prodotto</strong></button>
        </>
    )
}