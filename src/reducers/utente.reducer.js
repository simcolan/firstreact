import { utenteConstant } from "../constants/utente.constant";

// TERZO PASSO
export function utenteReducer(state, action) {
    switch (action.type) {
        case utenteConstant.LOGIN:
            return {
                ...state,
                utenteLog: action.utente
            };
                case utenteConstant.LOGOUT:
            return {
                ...state,
                utenteLog: undefined
            };
            default:
                return state
    }
}