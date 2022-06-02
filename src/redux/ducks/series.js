export const GET_SERIES = "get series list";
const SET_SERIES = "set series list";

export const GET_SEARCH_LIST = "get series list by search";
const SET_SEARCH_LIST = "set series list by search";

export const getseries = () => ({
    type: GET_SERIES
})

export const setseries = (seriesParam) => ({
    type: SET_SERIES,
    series: seriesParam
})

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
        series_search: seriesList
    }
)

const intialState = {
    seriesState: null,
    searchSeries: null
}

const seriesReducer = (state = intialState,  action) => {
    // console.log("series reducer action", action);
    switch(action.type) {
        case SET_SERIES:
            const { series } = action;
            // console.log("set series", series);
            return {...state, seriesState: series};
        case SET_SEARCH_LIST:
            const { series_search } = action;
            console.log("dataaaaaaaaaaaaaa", action)
            // console.log("set series search", action.series);
            return {...state, searchSeries: series_search};
        default:
            return state;
    }
}

export default seriesReducer;