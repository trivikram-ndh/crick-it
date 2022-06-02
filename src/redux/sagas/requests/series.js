import axios from "axios";

export default function requestGetseries() {
    return axios.request({
        method: "get",
        url: "https://api.cricapi.com/v1/series?apikey=c8e0129c-4c74-4ee7-820a-150b73d3d760&offset=0"
    })
}