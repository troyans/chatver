import Breadcrumb from '../breadcrumb/Breadcrumb';
import { BiChevronRight } from 'react-icons/bi';
import { getArticleDetail } from '@/lib/api/ExternalApi';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Articles({ id, articleList }) {
    let [articles, setArticles] = useState([]);
    const router = useRouter();

    
    const { mutate: getPageInfoList } = useMutation({
        mutationKey: 'pageInfolist',
        mutationFn: (idDetail) => getArticleDetail(idDetail),
        onSuccess: (res) => {
            const response = {
                public_url: res.data.public_url,
                id: res.data.id,
                title: res?.data?.properties?.title?.title?.[0]?.text?.content
            }
            setArticles((articles) => ([...articles, response]));
        },
        onError: (err) => {
            setArticles((articles) => ([...articles, err]));
        }
    });

    useEffect(() => {
        Array.isArray(articleList) && articleList?.map((item) => (
            getPageInfoList(item.id)
        ))
    }, [articleList]);

    const { mutate: getPageInfo } = useMutation({
        mutationKey: 'pageInfo',
        mutationFn: (idDetail) => getArticleDetail(idDetail),
        onSuccess: (res) => {
            res.data.public_url !== null ? (
                router.push(res.data.public_url)
            ) : (
                alert('Article not published yet')
            );
        }
    });

    const breadcrumbdata = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Categories",
            link: `/help-center`
        },
        {
            name: "Articles",
            link: `/help-center/${id}`
        }
    ];

    console.log(articles);
    
    return (
        <div className='flex flex-col gap-y-12 text-center mt-16 md:py-12 bg-white h-auto min-h-screen px-56'>
            <div className="flex text-left gap-x-4">
                <Breadcrumb data={breadcrumbdata} />
            </div>
            <p className="text-4xl text-gray-700 text-left">Article List</p>
            <div className="flex gap-x-12 flex-col justify-start items-start gap-y-8 shadow-CS1 p-6 text-gray-700 rounded-xl mb-24">
                {articles?.map((item, index) => (
                    item?.public_url !== undefined && item.public_url !== null ? (
                        <p
                            onClick={() => getPageInfo(item.id)}
                            className='hover:bg-blue-100 py-2 px-4 w-full text-left rounded-md flex justify-between cursor-pointer'
                            key={index}>{item.title} <BiChevronRight />
                        </p>
                    ): ("")
                ))}
            </div>
        </div>
    );
}
