import React, { useEffect, useState } from 'react';
import { NuovoProdottoComponent } from '../components/NuovoProdottoComponent';
import { LayoutPage } from '../layout/Layoutpage';
import { prodottiService } from '../services/prodotti.service';
import { history } from '../utils/history';

const AggiungiProdottopage = () => {

    const[listaProdotti,setListaProdotti]=useState();
    const[prodotto,setProdotto] = useState({id:"", titolo:"", descrizione:"", prezzo:"", immagine:""});

    const onChange=(e)=>
    {
      setProdotto({...prodotto, [e.target.name]:e.target.value})
    }

    useEffect(() => {
        if(!JSON.parse(localStorage.getItem("Utente"))?.success) {
            history.push("/login")
          }
    }, []);

    const pulisciInput = () => 
    {
      setProdotto({id:"", titolo:"", descrizione:"", prezzo:"", immagine:""})
    }
    
    const aggiungiProdotto=() => {
        prodottiService.aggiungiProdotto(prodotto).then((response) => {
            setListaProdotti(response)
            pulisciInput()
        })
    }

    return <> 
            <NuovoProdottoComponent             
            aggiungiProdotto = {aggiungiProdotto}
            prodotto = {prodotto}
            onChange = {onChange}
            ></NuovoProdottoComponent>              
        </>

};

const LayoutAggiungiProdottopage = LayoutPage(AggiungiProdottopage);
export { LayoutAggiungiProdottopage as AggiungiProdottopage};