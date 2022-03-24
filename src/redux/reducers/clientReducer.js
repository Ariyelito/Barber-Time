import { FETCH_BARBERS, FETCH_HOLIDAYS, SET_EMAIL, SET_NAME, SELECT_DAY,SELECTED_TIME,SELECTED_BARBER  } from "../actions/clientActions";

const initialState = {
    name: '',
    email: '',
    day: new Date().toISOString().slice(0, 10),
    barbers:[],
    holidays: [],
    time:"",
    selBarber:{},

}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_BARBERS:     
            return {
                ...state,
                barbers: action.payload
           
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
                day: action.payload
            }
        case SELECTED_TIME:
            return {
                ...state,
                time: action.payload
            }
        case SELECTED_BARBER:
            return {
                ...state,
                selBarber: action.payload
            }
            // current barber
    }
    return state;
}