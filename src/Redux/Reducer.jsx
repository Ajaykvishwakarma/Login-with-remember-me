import { AUTH, LOADING } from './ActionType';

const initialState = {
    auth : false,
    loading : false,
}

export const reducer = ( state = initialState, { type, payload}) => {
    switch(type) {
        case AUTH:
            return{ ...state, auth : payload}
        case LOADING:
            return { ...state, loading : payload}
        default:
            return state
    }
}