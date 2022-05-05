export const initialState = 0;

const incWish = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "INCWISH":
            state = payload;
            return state;
        default:
            return state;
    }
};

export default incWish;