export const toggleNav = (msg) => {
    return {
        type: "TOGGLENAV",
        payload: { msg },
    };
};

export const incWish = (msg) => {
    return {
        type: "INCWISH",
        payload: { msg },
    };
};