import axios from "axios"

class apiItemsServices {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: `https://api.tvmaze.com/`
        })
    }

    getShows(page) {
        return this.axiosApp.get(`/shows?page=${page}`);
    }
    
    getShow(id) {
        return this.axiosApp.get(`/shows/${id}`)
    }
}

const apiServices = new apiItemsServices()

export default apiServices




