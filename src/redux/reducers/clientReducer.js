import { FAKE_ACTION } from "../actions/clientActions";

const initialState = {
    list: [{ id: 1, text: "initial task" }],
    completed: [{ id: 12, text: "initial completed task" }]
}

export default function (state = initialState, action) {
    // let index;
    // let array;
    switch (action.type) {
        case FAKE_ACTION:
    }
    return state;
}