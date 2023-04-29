import axios from "axios"

class apiItemsServices {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: `https://api.tvmaze.com/`
        })
    }

    getShows = () => {
        return this.axiosApp.get('/shows')
    }

    getShow = (id) => {
        return this.axiosApp.get(`/shows/${id}`)
    }
}

const apiServices = new apiItemsServices()

export default apiServices




