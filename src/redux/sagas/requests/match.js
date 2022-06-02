import axios from "axios";

export default function requestGetmatch( payload ) {
    // console.log("match payload", payload)
    return axios.request({
        method: "get",
        url: `https://api.cricapi.com/v1/series_info?apikey=c8e0129c-4c74-4ee7-820a-150b73d3d760&id=${ payload }`
    })
}