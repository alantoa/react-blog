import { GET } from "utils/http"

const api = {
    skillList:'/api/user/skill',
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
export  function getSkillList (params) {

    return GET(api.skillList,params);
}