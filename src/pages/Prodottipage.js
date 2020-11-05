
import React, { useEffect, useState } from 'react';
import { carrelloAction } from '../actions/carrello.action';
import { ProdottoComponent } from '../components/ProdottoComponent';
import { useCarrello } from '../contexts/carrello.context';
import { LayoutPage } from '../layout/Layoutpage';
import { carrelloService } from '../services/carrello.service';
import { prodottiService } from '../services/prodotti.service';
import { history } from '../utils/history';

const Prodottipage=()=>{

    // const [listaCarrello, setListaCarrello] = useState();
    const[listaProdotti,setListaProdotti]=useState();
    const{ carrelloState, dispatchCarrello} = useCarrello();

    // LO useEffect VIENE UTILIZZATO PER CONTROLLARE IL COMPONENTE E LE ULTIME DUE QUADRE 
    // SERVONO PER FAR SI CHE, OGNI VOLTA CHE FACCIAMO IL REFRESH DELLA PAGINA, VIENE 
    // EFFETTUATA  NUOVAMENTE LA CHIAMATA AL SERVER MA SOLO ALLA PRIMA CHIAMATA. 
    // SE NON METTIAMO LE QUADRE ENTRA IN UN LOOP INFINITO
    useEffect(() => {
        if(!JSON.parse(localStorage.getItem("Utente"))?.success) {
            history.push("/login")
          }
        prodottiService.getAllProdotti().then((response) => {
            setListaProdotti(response);
        });
    }, []);

    const eliminaProdotto=(id) => {
        prodottiService.deleteProdotto(id).then((response) => {
            setListaProdotti(response)
        })
    }
    
    const aggiungiCarrello = (prodotto) => {
            carrelloService.aggiungiCarrello(prodotto).then((response) => {
                // setListaCarrello(response);
                dispatchCarrello(carrelloAction.setCarrello(response));
            })
    }

    return <> 
    {listaProdotti ?
        listaProdotti.map(prodotto => 
            <>
            <ProdottoComponent 
            showButtonProdotto = {true}
            showButtonCarrello = {false}
            prodotto = {prodotto}
            eliminaProdotto = {eliminaProdotto}
            aggiungiCarrello = {aggiungiCarrello}
            ></ProdottoComponent>    
            </>) 
            :
        <h1>NON ESISTE</h1>}
        </>;
};

const LayoutProdottipage = LayoutPage(Prodottipage);
export { LayoutProdottipage as Prodottipage};