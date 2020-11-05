import { carrelloConstant } from "../constants/carrello.constant";

export const carrelloAction = {
    setCarrello
}

function setCarrello(listaCarrello) {
    return {
        type: carrelloConstant.SET_CARRELLO,
        listaCarrello
    };
}
