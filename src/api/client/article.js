import { GET } from "utils/http"

const api = {
    swiper: '/api/article/swiper',
    recommend: '/api/article/recommend',
    getArticle:'/api/article/list',
    articleDetail:(id)=> `/api/article/detail/${id}`
}


/**
 * Get Article List
 * @param {pageindex,pagesize} params 
 */
export  function getSwiper (params) {

    return GET(api.swiper,params);
}

/**
 * Get Article List
 * @param {pageindex,pagesize} params 
 */
export  function getArticle (params) {

    return GET(api.getArticle,params);
}
/**
 * Get Article List
 * @param {pageindex,pagesize} params 
 */
export  function getRecommend (params) {

    return GET(api.recommend,params);
}
/**
 * Get Article List
 * @param {pageindex,pagesize} params 
 */
export  function articleDetail (id) {

    return GET(api.articleDetail(id));
}