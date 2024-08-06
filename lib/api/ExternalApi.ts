import { apiExternal } from "../utils";


export const getAlldata = async (id: string) => {    
    const response = await apiExternal.get(`/get-all-pages?pageId=${id}`);
    return response.data;
};
export const getNotionAccount = async (id: string) => {    
    const response = await apiExternal.get(`/get-notion-account?id=${id}`);
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
export const getToken = async (code: any) => {
    let userId = null;
    if (typeof window !== "undefined") {
        userId = localStorage.getItem("userId") ?? null
    };
    const response = await apiExternal.get(`/get-token-notion?code=${code}&id=${userId}`);
    return response.data;
};