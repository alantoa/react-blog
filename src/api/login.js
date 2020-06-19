import {  POST } from "../utils/http"
import md5 from 'js-md5'
const api = {
    login: '/api/user/login'
}

export  function login (params) {
    let form = {
        username:params.username,
        password:md5(params.password)
    }
    return POST(api.login, form);
}