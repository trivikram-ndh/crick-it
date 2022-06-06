export const GET_SERIES = "get series list";
const SET_SERIES = "set series list";

export const GET_SEARCH_LIST = "get series list by search";
const SET_SEARCH_LIST = "set series list by search";

export const GET_DELETE_LIST = "delete series from list";
const SET_NEW_LIST = "set new series list";

export const CREATE_SERIES_LIST = "create a series list";

export const EDIT_SERIES_LIST = "edit series list";

export const UPDATE_SERIES_LIST = "update series list";

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

export const createSeriesList = (payload) => {
    // console.log("createSeriesList", payload);
    return({
        type: CREATE_SERIES_LIST,
        payload
    })
}

export const editSeriesList = (payload) => {
    // console.log("editSeriesList", payload);
    return({
        type: EDIT_SERIES_LIST,
        index: payload.index,
        status: payload.status
    })
}

export const updateSeriesList = (payload) => {
    // console.log("editSeriesList", payload);
    return({
        type: UPDATE_SERIES_LIST,
        index: payload.index,
        payload: payload.updateObj
    })
}

export const deleteSeries = (payload) => {
    console.log("delete ID", payload)
    return({
        type: GET_DELETE_LIST,
        index: payload
    })
}

const intialState = {
    seriesState: null,
    searchSeries: null,
    newSeriesList: null,
    createSeriesList: null,
    btnState: null,
    editState: null,
    updateState: null
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
            // console.log("dataaaaaaaaaaaaaa", action)
            // console.log("set series search", action.series);
            return {...state, searchSeries: series_search};
        case CREATE_SERIES_LIST:
            // const {createSeriesList} = action;
            // console.log("create series action", action.payload);
            // console.log("create series state", state);
            state.seriesState.unshift(action.payload);
            return {...state, seriesState: Array.from(state.seriesState)};
        case EDIT_SERIES_LIST:
            const {index, status} = action;
            // const editData = state.[{index}];
            // console.log("edit series action", {index, status});
            // console.log("edit series state", state);
            return {...state, btnState: {index, status}, editState: state.seriesState[index]};
        case UPDATE_SERIES_LIST:
            // const {payload} = action;
            // const editData = state.[{index}];
            // console.log("update series action", action);
            console.log("update series state", state);
            state.seriesState[action.index].name = action.payload.name;
            state.seriesState[action.index].endDate = action.payload.endDate;
            return {...state, seriesState: Array.from(state.seriesState)};
        case GET_DELETE_LIST:
            const {seriesState} = state;
            seriesState.splice(action.index, 1);
            return {...state, seriesState: Array.from(seriesState)};

        default:
            return state;
    }
}

export default seriesReducer;