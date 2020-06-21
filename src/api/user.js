import { GET, POST,PUT,DEL } from "../utils/http"

const api = {
    getUserInfo:'/api/user/info',
    getUserList: '/api/user/list',
    addUserList: '/api/user/add',
    updateUserList: '/api/user/update',
    delUserList: '/api/user/del',
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

    return GET(api.getUserList,params);
}

/**
 * Add User for UserList
 * @param {paramsData} params 
 */
export  function addUserList (params) {

    return POST(api.addUserList, params);
}

/**
 * Edit User for UserList
 * @param {paramsData} params 
 */
export  function updateUserList (params) {
    
    return PUT(api.updateUserList, params);
}

/**
 * Delete User for UserList
 * @param {paramsData} params 
 */
export  function delUserList (params) {
    
    return DEL(api.delUserList, params);
}