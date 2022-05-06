import { TOGGLE_NAV } from "./../actions/types";

const initialState = false;

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "TOGGLE_NAV":
            {
                return [...state, payload];
            }
        default:
            {
                return state;
            }
    }
}