const URL_BACKEND = "http://localhost:9999";

export const carrelloService = {
    aggiungiCarrello,
    getAllCarrello,
    deleteCarrello
}

function getAllCarrello() {
    const requestOptions = {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    };
    return fetch(URL_BACKEND + '/carrello', requestOptions)
    .then(response => response.json()).catch(err => console.log(err))
}

function aggiungiCarrello(req) {
    const requestOptions = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req)
    };
    return fetch(URL_BACKEND + '/carrello', requestOptions)
    .then(response => response.json()).catch(err => console.log(err))
}

function deleteCarrello(id) {
    const requestOptions = {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' }
    };
    return fetch(URL_BACKEND + `/carrello/${id}`, requestOptions)
    .then(response => response.json()).catch(err => console.log(err))
}