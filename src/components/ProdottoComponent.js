import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import style from "./ProdottoComponent.module.css";

export const ProdottoComponent = ({ prodotto, eliminaProdotto, eliminaProdottoCarrello,
     aggiungiCarrello, showButtonProdotto, showButtonCarrello }) => {
    return (
        <>

            <div className={style.testimonials}>
                <div className={style.card}>
                    <div className={style.layer}></div>
                    <div className={style.content}>
                        <div className={style.title}>
                            <h5><strong>{prodotto.titolo}</strong></h5>
                            <h6><strong>ID Prodotto: {prodotto.id}</strong></h6>
                        </div>
                        <div className={style.image}>
                            <img className={style.img} src={prodotto.immagine} />
                        </div>
                        <div className={style.details}>
                            <h2> PREZZO: {prodotto.prezzo} €
                            <span>{prodotto.descrizione}</span></h2>
                        </div>
                        {prodotto.quantita &&
                            <div className={style.details}>
                                <h3><strong>Quantità = {prodotto.quantita}</strong></h3></div>}
                        {showButtonProdotto &&
                            <> {JSON.parse(localStorage.getItem("Utente"))?.ruolo == "admin" &&
                                <button className={style.btnElimina} onClick={() => eliminaProdotto(prodotto.id)}>
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                                    </svg>
                                    <strong>Elimina Prodotto</strong>
                                </button>}
                                {JSON.parse(localStorage.getItem("Utente"))?.ruolo == "user" &&
                                    <button className={style.btnAggiungiCarrello} onClick={() => aggiungiCarrello(prodotto)}>
                                        <strong>Aggiungi al Carrello</strong>
                                    </button>}
                            </>}
                        {showButtonCarrello &&
                            <button className={style.btnEliminaCarrello} onClick={() => eliminaProdottoCarrello(prodotto.id)}>
                                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                                    </svg>
                            </button>}
                    </div>
                </div>
            </div>

        </>

    )
}

{/* <div className="contaneirCard">
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
                            {JSON.parse(localStorage.getItem("Utente"))?.ruolo=="user" &&
                            <button id="btnAggiungiCarrello" onClick={() => aggiungiCarrello(prodotto)}>
                                <strong>Aggiungi al Carrello</strong>
                            </button>}
                        </>}
                    {showButtonCarrello &&                 
                        <button id="btnEliminaCarrello" onClick={() => eliminaProdottoCarrello(prodotto.id)}>
                            <strong>Elimina dal Carrello</strong>
                        </button>}
                </Card>
            </div> */}