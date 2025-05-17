import axios from "axios";


const http = axios.create({baseURL: 'http://localhost:3000'});


export class ProfilesApiService  {

    constructor(_resourceEndpoint) {
        this.resourceEndpoint = _resourceEndpoint;
    }


    getAllResources() {
        return http.get(this.resourceEndpoint)
    }

    getProfileById(id) {
        return http.get(`${this.resourceEndpoint}/${id}`)
    }

    create(profile) {
        return http.post(this.resourceEndpoint, profile)
    }

    update(id, profile) {
        return http.put(`${this.resourceEndpoint}/${id}`, profile)
    }

    delete(id) {
        return http.delete(`${this.resourceEndpoint}/${id}`)
    }

}