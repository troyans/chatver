import { apiExternal } from "../utils";


export const getAlldata = async (id: string) => {    
    const response = await apiExternal.get(`/get-all-pages?pageId=${id}`);
    return response.data;
};
export const getArticleList = async (id: any) => {    
    const response = await apiExternal.get(`/get-all-pages?pageId=${id}`);
    return response.data;
};
export const getArticleDetail = async (id: any) => {
    try {
        const response = await apiExternal.get(`/get-page?pageId=${id}`);
        return response.data;
    } catch (error) {
        return error;   
    }
};