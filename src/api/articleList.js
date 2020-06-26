import { GET } from "../utils/http"

const api = {
    article: '/api/list'
}


/**
 * Get Article List
 * @param {keywod,pageindex,pagesize} params 
 */
export  function getArticleList (params) {

    return GET(api.article,params);
}
