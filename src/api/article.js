import { GET, POST,PUT,DEL } from "../utils/http"

const api = {
    getArticleList: '/api/article/list',
    addArticleList: '/api/article/add',
    updateArticleList: '/api/article/update',
    delArticleList: '/api/article/del',
}


/**
 * Get Article List
 * @param {keywod,pageindex,pagesize} params 
 */
export  function getArticleList (params) {

    return GET(api.getArticleList,params);
}

/**
 * Add Article for ArticleList
 * @param {paramsData} params 
 */
export  function addArticleList (params) {

    return POST(api.addArticleList, params);
}

/**
 * Edit Article for ArticleList
 * @param {paramsData} params 
 */
export  function updateArticleList (params) {
    
    return PUT(api.updateArticleList, params);
}

/**
 * Delete Article for ArticleList
 * @param {paramsData} params 
 */
export  function delArticleList (params) {
    
    return DEL(api.delArticleList, params);
}