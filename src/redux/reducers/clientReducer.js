import { FETCH_BARBERS, FETCH_HOLIDAYS, SET_EMAIL, SET_NAME, SELECT_DAY } from "../actions/clientActions";

const initialState = {
    name: {},
    email: {},
    selectedDay: {},
    barbers: [
        // { "adress": "123 rue fresh", "barberId": 1, "email": "orlando@gmail", "name": "Orlando", "password": "orlando" },
        // { "adress": "123 rue fresh", "barberId": 1, "email": "orlando@gmail", "name": "Ariel", "password": "orlando" }
    ],
    holidays: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_BARBERS:
            return {
                ...state,
                barbers: action.payload.tab
            }
        case FETCH_HOLIDAYS:
            return {
                ...state,
                holidays: action.payload
            }
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case SELECT_DAY:
            return {
                ...state,
                email: action.payload
            }
            // current barber
    }
    return state;
}