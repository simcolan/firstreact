const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

// QUESTE COSTANTI NON VENGONO INIZIALIZZATE QUALORA SI USI UN DATABASE
const PRODUCT_DATA_FILE = path.join('./server-prodotti.json');
const USER_DATA_FILE = path.join('./server-utenti.json');
const CARRELLO_DATA_FILE = path.join('./server-carrello.json');

app.set('port', process.env.PORT || 9999);

// LIBRERIA CHE PASSA IL BODY DI OGNI CHIAMATA E LO TRASFORMA IN JSON
app.use(bodyParser.json());

// POST PER EFFETTUARE IL LOGIN DELL'UTENTE
app.post('/login', (req,res) => {
    fs.readFile(USER_DATA_FILE, (err,data) => {
        const listaUtenti = JSON.parse(data);
        var utenteLogin={success:false};
        listaUtenti.map(utente => {
            if (utente.username === req.body.username
             && utente.password === req.body.password
             ) 
             utenteLogin = {...utente, success:true};
             return null;
        });
        res.json(utenteLogin);
    });
});


// GET PER LETTURA DEGLI UTENTI PRESENTI NEL SERVER UTENTI
app.get('/utenti', (req, res) => {
    fs.readFile(USER_DATA_FILE, (err,data) => {
        res.json(JSON.parse(data));
    });
});

//GET PER LETTURA DEI PRODOTTI PRESENTI NEL SERVER PRODOTTI
app.get('/prodotti', (req, res) => {
    fs.readFile(PRODUCT_DATA_FILE, (err,data) => {
        res.json(JSON.parse(data));
    });
});

// POST PER INSERIMENTO PRODOTTO NEL FILE SERVER PRODOTTI
app.post('/prodotti', (req, res) => {
    fs.readFile(PRODUCT_DATA_FILE, (err,data) => {
        const listaProdotti = JSON.parse(data);
        const nuovoProdotto = {
            id: Math.floor(Math.random()*1000),
            titolo: req.body.titolo,
            descrizione: req.body.descrizione,
            prezzo: req.body.prezzo,
            immagine: req.body.immagine
        };
        listaProdotti.push(nuovoProdotto);
        fs.writeFile(
            PRODUCT_DATA_FILE,
            JSON.stringify(listaProdotti, null, 4),
            () => {
                res.json(listaProdotti);
            }
        );
    });
});

// DELETE PER RIMUOVERE UN PRODOTTO DAL SERVER PRODOTTI
app.delete('/prodotti/:id', (req, res) => {
    fs.readFile(PRODUCT_DATA_FILE, (err, data) => {
        const listaProdotti = JSON.parse(data);
        var nuovaListaProdotti = listaProdotti.filter(prodotto => prodotto.id !== parseInt(req.params.id));
        fs.writeFile(
            PRODUCT_DATA_FILE,
            JSON.stringify(nuovaListaProdotti, null, 4),
            () => {
                res.json(nuovaListaProdotti);
            })

    });
});

//GET PER LETTURA DEI PRODOTTI PRESENTI NEL SERVER CARRELLO
app.get('/carrello', (req, res) => {
    fs.readFile(CARRELLO_DATA_FILE, (err,data) => {
        res.json(JSON.parse(data));
    });
});

// POST PER INSERIMENTO PRODOTTO NEL FILE SERVER CARRELLO
app.post('/carrello', (req, res) => {
    fs.readFile(CARRELLO_DATA_FILE, (err, data) => {
        var listaCarrello = JSON.parse(data);
        // CONDIZIONE IF PER VEDERE SE IL PRODOTTO è GIA PRESENTE NEL CARRELLO
        var prodottoPresente = listaCarrello.filter(prodotto => prodotto.id === parseInt(req.body.id))[0];
        if (prodottoPresente) {
            var prodottoPresente = {
                ...prodottoPresente,
                quantita: prodottoPresente.quantita++
            }
        } else {
            const nuovoProdottoCarrello = {
                id: req.body.id,
                titolo: req.body.titolo,
                descrizione: req.body.descrizione,
                prezzo: req.body.prezzo,
                immagine: req.body.immagine,
                quantita: 1
            };
            listaCarrello.push(nuovoProdottoCarrello);
        }
            fs.writeFile(
                CARRELLO_DATA_FILE,
                JSON.stringify(listaCarrello, null, 4),
                () => {
                    res.json(listaCarrello);
                }
            );
        
    });
});

// DELETE PER RIMUOVERE UN PRODOTTO DAL SERVER CARRELLO
app.delete('/carrello/:id', (req, res) => {
    fs.readFile(CARRELLO_DATA_FILE, (err, data) => {
        var listaCarrello = JSON.parse(data);

        var prodotto = listaCarrello.filter(prodotto => prodotto.id === parseInt(req.params.id))[0];
        if (prodotto.quantita > 1) {
            prodotto = {
                ...prodotto,
                quantita: prodotto.quantita--
            }   
        } else {
            var listaCarrello = listaCarrello.filter(prodotto => prodotto.id !== parseInt(req.params.id));
        }
        fs.writeFile(
            CARRELLO_DATA_FILE,
            JSON.stringify(listaCarrello, null, 4),
            () => {
                res.json(listaCarrello);
            }
        );
    });
});



//IL SERVER SARà IN ASCOLTO ALLA PORTA SETTATA ALLA RIGA 13
app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`)
});