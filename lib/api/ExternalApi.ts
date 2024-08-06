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
export const getArticleDetail = async (articles: any) => {
    let finalResult = [];
    for (const article of articles) {
        const response = await apiExternal.get(`/get-page?pageId=${article.id}`);
        
        const result = {
            public_url: response.data.data.public_url,
            id: response.data.data.id,
            title: response.data?.data?.properties?.title?.title?.[0]?.text?.content,
            created_time: response.data.data.created_time,
            icon: response.data?.data?.icon ?? null,
            cover: response.data?.data?.cover?.external?.url ?? null
        }
        finalResult.push(result);
    }
    
    return finalResult;
};
export const getToken = async (code: any) => {
    let userId = null;
    if (typeof window !== "undefined") {
        userId = localStorage.getItem("userId") ?? null
    };
    const response = await apiExternal.get(`/get-token-notion?code=${code}&id=${userId}`);
    return response.data;
};