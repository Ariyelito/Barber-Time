import { SET_ACTIVE_BARBER } from "../actions/barberActions";

const initialState = {
    connected : {}
}

export default function (state = initialState, action) {
    // let index;
    // let array;
    switch (action.type) {
        case SET_ACTIVE_BARBER:
            return {
                ...state,
                connected: action.payload
            }
    }
    return state;
}