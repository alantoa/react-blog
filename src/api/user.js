import { GET, POST,PUT,DEL } from "../utils/http"

const api = {
    getUserInfo:'/api/user/login',
    user:'/api/admin/user',
}

/**
 * Get User Info
 * @param {token} params 
 */
export  function getUserInfo (params) {

    return GET(api.getUserInfo, params);
}

/**
 * Get User List
 * @param {keywod,pageindex,pagesize} params 
 */
export  function getUserList (params) {

    return GET(api.user,params);
}

/**
 * Add User for UserList
 * @param {paramsData} params 
 */
export  function addUserList (params) {

    return POST(api.user, params);
}

/**
 * Edit User for UserList
 * @param {paramsData} params 
 */
export  function updateUserList (params) {
    
    return PUT(api.user, params);
}

/**
 * Delete User for UserList
 * @param {paramsData} params 
 */
export  function delUserList (params) {
    
    return DEL(api.user, params);
}