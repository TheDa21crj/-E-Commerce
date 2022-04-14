export const toggleNav = (msg) => {
    return {
        type: "TOGGLENAV",
        payload: { msg },
    };
};