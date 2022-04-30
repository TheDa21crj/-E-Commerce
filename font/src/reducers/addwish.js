export const initialState = {
    _id: "",
    quantity: "",
};

const toggleNav = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "WISH":
            return {
                ...state,
            };
            state = payload;
            return state;
        default:
            return state;
    }
};

export default toggleNav;