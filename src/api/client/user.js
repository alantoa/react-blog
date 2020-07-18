import { GET } from "utils/http"

const api = {
    skillList:'/api/user/skill',
    user:(name)=>`/api/user/info/${name}`,
}

/**
 * Get User Info
 * @param {token} params 
 */
export  function getUserInfo (name) {
    return GET(api.user(name));
}

/**
 * Get User List
 * @param {keywod,pageindex,pagesize} params 
 */
export  function getSkillList (params) {

    return GET(api.skillList,params);
}