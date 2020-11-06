import React, { useEffect, useState } from 'react';
import { UtenteComponent } from '../components/UtenteComponent';
import { utenteService } from '../services/utente.service';
import { history } from '../utils/history';
import { LayoutPage } from '../layout/Layoutpage';
import { utenteActions } from '../actions/utente.action';
import { useUtente } from '../contexts/utente.context';
import { useCarrello } from '../contexts/carrello.context';
import { carrelloAction } from '../actions/carrello.action';
import { carrelloService } from '../services/carrello.service';
import style from "../components/UtenteComponent.module.css";

const Loginpage = () => {

    const[state,setState] = useState({username:"", password:""});
    const[utenteLoggato,setutenteLoggato] = useState({});
    const{ utenteState, dispatch} = useUtente();
    const{ carrelloState, dispatchCarrello} = useCarrello();


    const onChange=(e)=>
    {
      setState({...state, [e.target.name]:e.target.value})
    }

    const loginUtente=() => {
        var utente = {username:state.username, password:state.password};
        utenteService.loginUtente(utente).then((response) => {
            setutenteLoggato(response)

            if(response.success) {
             history.push("/prodotti")
             localStorage.setItem('Utente', JSON.stringify(response))
             dispatch(utenteActions.loginAction(response))
 
            } else {
                setState({username:"", password:""})
            }
            carrelloService.getAllCarrello().then((response) => {
                dispatchCarrello(carrelloAction.setCarrello(response));
            });
        })
    }

    return (
        <div className={style.body}>
    <UtenteComponent 
    loginUtente={loginUtente}
    state = {state}
    onChange = {onChange}>
    </UtenteComponent>
    </div>
    )
}

const LayoutLoginpage = LayoutPage(Loginpage);
export { LayoutLoginpage as Loginpage };