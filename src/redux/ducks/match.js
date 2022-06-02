export const GET_MATCH = "get match list";
const SET_MATCH = "set match list";

export const getmatch = (payload) => {
    // console.log("payload----------", payload)
    return ({
        type: GET_MATCH,
        id: payload.id
    })
}

export const setmatch = (matchParam) => ({
    type: SET_MATCH,
    match: matchParam
})

const intialState = {
    matchState: null,
    name: "This is intial state"
}

const matchReducer = (state = intialState,  action) => {
    // console.log("match reducer action", action);
    // console.log("match reducer state", state);
    switch(action.type) {
        case SET_MATCH:
            const { match } = action;
            // console.log("case match", action);
            return {...state, matchState: match}
        default:
            return state;
    }
}

// console.log("main match reducer", matchReducer);

export default matchReducer;