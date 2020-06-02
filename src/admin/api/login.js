import {  POST } from "../utils/http"

const api = {
    login: '/admin_api/user/login'
}

export  function login (params) {
    return POST(api.login, params);
}