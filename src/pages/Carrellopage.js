
import React, { useEffect, useState } from 'react';
import { carrelloAction } from '../actions/carrello.action';
import { ProdottoComponent } from '../components/ProdottoComponent';
import { useCarrello } from '../contexts/carrello.context';
import { LayoutPage } from '../layout/Layoutpage';
import { carrelloService } from '../services/carrello.service';
import { history } from '../utils/history';

const Carrellopage = () => {

    // const [listaCarrello, setListaCarrello] = useState();
    const{ carrelloState, dispatchCarrello} = useCarrello();

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem("Utente"))?.success) {
            history.push("/login")
        }
        carrelloService.getAllCarrello().then((response) => {
            // setListaCarrello(response)
            dispatchCarrello(carrelloAction.setCarrello(response));
        });
    }, []);

    const eliminaProdottoCarrello=(id) => {
        carrelloService.deleteCarrello(id).then((response) => {
            dispatchCarrello(carrelloAction.setCarrello(response));        
        });
    }

    return <> 
    {carrelloState?.listaCarrello ?
        carrelloState.listaCarrello.map(prodotto => 
            <>
            <ProdottoComponent 
            eliminaProdottoCarrello = {eliminaProdottoCarrello}
            showButtonProdotto = {false}
            showButtonCarrello = {true}
            prodotto = {prodotto}
            ></ProdottoComponent>    
            </>) 
            :
        <h1>NON ESISTE</h1>}
        </>;

};

const LayoutCarrellopage = LayoutPage(Carrellopage);
export { LayoutCarrellopage as Carrellopage};
