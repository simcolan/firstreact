import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import "./ProdottoComponent.css"

export const ProdottoComponent = ({ prodotto, eliminaProdotto, eliminaProdottoCarrello, aggiungiCarrello, 
    showButtonProdotto, showButtonCarrello }) => {
    return (
        <>
            <div className="contaneirCard">
                <Card id="Card">
                    <Card.Img id="CardImg" src={prodotto.immagine} />
                    <Card.Body>
                        <Card.Title>PRODOTTO N° {prodotto.id} </Card.Title>
                        <Card.Text>
                            Descrizione Prodotto = {prodotto.descrizione}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Tipo Prodotto = {prodotto.titolo} </ListGroupItem>
                        <ListGroupItem>Prezzo Prodotto = {prodotto.prezzo} </ListGroupItem>
                       {prodotto.quantita && 
                       <ListGroupItem>Quantità = {prodotto.quantita} </ListGroupItem>}
                    </ListGroup>
                    {showButtonProdotto && 
                        <> {JSON.parse(localStorage.getItem("Utente"))?.ruolo=="admin" &&
                            <button id="btnElimina" onClick={() => eliminaProdotto(prodotto.id)}>
                                <strong>Elimina Prodotto</strong>
                            </button>}
                            <button id="btnAggiungiCarrello" onClick={() => aggiungiCarrello(prodotto)}>
                                <strong>Aggiungi al Carrello</strong>
                            </button>
                        </>}
                    {showButtonCarrello &&
                        <button id="btnEliminaCarrello" onClick={() => eliminaProdottoCarrello(prodotto.id)}>
                            <strong>Elimina dal Carrello</strong>
                        </button>
                    }
                </Card>
            </div>
        </>
    )
}