import Articles from "@/components/helpCenter/Articles";
import LandingFooter from "@/components/landingPage/landingFooter";
import LandingHeader from "@/components/landingPage/landingHeader";
import AuthLayout from "@/components/layout/AuthLayout";
import { apiExternal } from "@/lib/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ListArticles() {
    const [articleList, setArticleList] = useState([]);
    
    const router = useRouter();
    const id = router.query.idSub;

    const getArticleList = async () => {
        const response = await apiExternal.get(`/get-all-pages?pageId=${id}`);
        return response.data;
    };

    useEffect(() => {
        getArticleList().then((res) => {
            setArticleList(res.data)
        });
    }, [id]);
    
    
    
    return (
        <AuthLayout>
            <LandingHeader />
            <Articles id={id} articleList={ articleList } />
            <LandingFooter />
        </AuthLayout>
    );
}
