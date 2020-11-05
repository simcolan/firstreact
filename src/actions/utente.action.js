import { utenteConstant } from "../constants/utente.constant"

// SECONDO PASSO
export const utenteActions = {
    loginAction,
    logoutAction,
}

function loginAction(utente) {
    return {
        type: utenteConstant.LOGIN,
        utente
    };
}

function logoutAction() {
    return {
        type:utenteConstant.LOGOUT
    };
}