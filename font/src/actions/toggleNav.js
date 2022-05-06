import { TOGGLE_NAV } from "./types";

export const toogleNav = (msg) => (dispatch) => {
    dispatch({
        type: TOGGLE_NAV,
        payload: msg,
    });
};