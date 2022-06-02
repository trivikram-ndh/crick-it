export const GET_SEARCH_LIST = "get series list by search";
export const SET_SEARCH_LIST = "set series list by search";

export const getsearchlist = (payload) => {
    // console.log("search list", payload)
    return({
        type: GET_SEARCH_LIST,
        searchTxt: payload
    })
}

export const setsearchlist = (seriesList) => (
    {
        type: SET_SEARCH_LIST,
        series: seriesList
    }
)

const intialState = {
    seriesState: null,
}

const searchSeriesReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_SEARCH_LIST:
            const {series} = action;
            // console.log("search series action", series);
            return {...state, seriesState: series}    
        default:
            return state;
    }
}

export default searchSeriesReducer;