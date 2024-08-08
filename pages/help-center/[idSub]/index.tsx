import Articles from "@/components/helpCenter/Articles";
import HeaderHelpdesk from "@/components/landingPage/helpdesk/HeaderHelpdesk";
import AuthLayout from "@/components/layout/AuthLayout";
import { apiExternal } from "@/lib/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ListArticles() {
    const [articleList, setArticleList] = useState([]);
    
    // ambil page id yang dikirm di url
    const router = useRouter();
    const id = router.query.idSub;

    // membuat request api dengan page id yang di dapat di url
    const getArticleList = async () => {
        const response = await apiExternal.get(`/get-all-pages?pageId=${id}`);
        return response.data;
    };

    useEffect(() => {
        getArticleList().then((res) => {
            // Simpan response artikelnya dan kirimnya ke component articles
            setArticleList(res.data)
        });
    }, [id]);
    
    
    
    return (
        <AuthLayout>
            <HeaderHelpdesk />
            <Articles articleList={ articleList } />
        </AuthLayout>
    );
}
