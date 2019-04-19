import axios from 'axios'

export default {
    login({commit}, params){
        return axios.post('/api/background/account/login', params)
    },
    logout({commit}, params){
        return axios.post('/api/background/account/logout', params)
    },
}