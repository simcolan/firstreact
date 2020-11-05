import { carrelloConstant } from "../constants/carrello.constant";

// TERZO PASSO
export function carrelloReducer(state, action) {
    switch (action.type) {
        case carrelloConstant.SET_CARRELLO:
            return {
                ...state,
                listaCarrello: action.listaCarrello
            };
            default:
                return state
    }
}