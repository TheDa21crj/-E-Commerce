export const toggleNav = (msg) => {
    return {
        type: "TOGGLENAV",
        payload: { msg },
    };
};

export const incWish = (msgW) => {
    return {
        type: "INCWISH",
        payload: { msgW },
    };
};