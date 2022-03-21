import { FAKE_ACTION, FETCH_BARBERS } from "../actions/clientActions";

const initialState = {
    barbers: [
        // { "adress": "123 rue fresh", "barberId": 1, "email": "orlando@gmail", "name": "Orlando", "password": "orlando" },
        // { "adress": "123 rue fresh", "barberId": 1, "email": "orlando@gmail", "name": "Ariel", "password": "orlando" }
    ],
    // examples
    list: [{ id: 1, text: "initial task" }],
    completed: [{ id: 12, text: "initial completed task" }]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_BARBERS:
            return {
                ...state,
                barbers: action.payload.tab
            }
    }
    return state;
}