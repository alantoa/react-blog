import { GET, POST,PUT,DEL } from "../utils/http"

const api = {
    article: '/api/admin/article',
    update:(id)=> `/api/admin/article/${id}`
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
export  function updateArticleOne (id,params) {
    
    return PUT(api.update(id), params);
}

/**
 * Delete Article for ArticleList
 * @param {paramsData} params 
 */
export  function delArticleList (params) {
    
    return DEL(api.article, params);
}