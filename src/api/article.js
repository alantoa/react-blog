import { GET, POST,PUT,DEL } from "../utils/http"

const api = {
    article: '/api/admin/article'
}


/**
 * Get Article List
 * @param {keywod,pageindex,pagesize} params 
 */
export  function getArticleList (params) {

    return GET(api.article,params);
}

/**
 * Add Article for ArticleList
 * @param {paramsData} params 
 */
export  function addArticleList (params) {

    return POST(api.article, params);
}

/**
 * Edit Article for ArticleList
 * @param {paramsData} params 
 */
export  function updateArticleList (params) {
    
    return PUT(api.article, params);
}

/**
 * Delete Article for ArticleList
 * @param {paramsData} params 
 */
export  function delArticleList (params) {
    
    return DEL(api.article, params);
}