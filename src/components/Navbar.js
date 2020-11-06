import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { utenteActions } from '../actions/utente.action'
import { useCarrello } from '../contexts/carrello.context'
import { useUtente } from '../contexts/utente.context'
import { history } from '../utils/history'
import style from "./Navbar.module.css"

export const NavbarComponent = () => {

  const { utenteState, dispatch } = useUtente();

  const{ carrelloState } = useCarrello();

  const logoutUtente = () => {
    localStorage.removeItem("Utente")
    dispatch(utenteActions.logoutAction())
    history.push("/login")
  }

  return (
    <>
      <Navbar className={style.colorNavbar}>
        <Navbar.Brand>
          <img src="/logo.jpg" className={style.imgNavbar} />
          <strong>React Bootstrap</strong>
        </Navbar.Brand>
        {JSON.parse(localStorage.getItem("Utente"))?.success &&
          <>
            <Link className={style.linkNavbar} to="/">HOMEPAGE</Link>
            <Link className={style.linkNavbar} to="/prodotti">Prodotti</Link>
            <Link className={style.linkNavbar} to="/prodotti/inserimento">Inserisci Prodotto</Link>
            <span onClick={() => logoutUtente()}>LOGOUT</span>
            <Link className={style.linkNavbar} to="/carrello">{carrelloState?.listaCarrello?.length}
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </Link>
          </>}
      </Navbar>
    </>)
}