import { GET, POST } from "../utils/http";

const api = {
  getAbout:(id)=>`/api/admin/getAbout/${id}`,
  editAbout: "/api/admin/addAbout",
};

/**
 * Get Article List
 * @param {keywod,pageindex,pagesize} params
 */
export function getAbout(id) {
  return GET(api.getAbout(id));
}

/**
 * Add Article for ArticleList
 * @param {paramsData} params
 */
export function editAbout(params) {
  return POST(api.editAbout, params);
}

