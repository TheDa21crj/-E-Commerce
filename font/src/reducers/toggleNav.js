export const initialState = "";

const toggleNav = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "TOGGLENAV":
            state = payload;
            return state;
        default:
            return state;
    }
};

export default toggleNav;