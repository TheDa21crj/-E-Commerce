const initialState = false;

const toggleNav = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLENAV":
            state = !state;
            console.log(state);
            return state;
        default:
            return state;
    }
};

export default toggleNav;