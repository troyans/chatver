import { getArticleDetail } from '@/lib/api/ExternalApi';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';

export default function Articles({ articleList }) {
    let [articles, setArticles] = useState([]);
    let [loading, setLoading] = useState(true);
    const router = useRouter();

    // membuat request api untuk mengambil semua detail artikel dari list artikel
    const { mutate: getPageInfoList } = useMutation({
        mutationKey: 'pageInfolist',
        mutationFn: () => getArticleDetail(articleList),
        onMutate:() => setLoading(true),
        onSuccess: (res) => {            
            setArticles(res);
            setLoading(false);
        }
    });

    useEffect(() => {
        getPageInfoList(articleList);
    }, [articleList]);

    return (
        <>
            <div className="py-12 bg-white">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <nav>
                        <ul className="flex items-center space-x-3">
                            <li>
                                <a href={`/help-center`} title="" className="text-sm font-medium text-gray-500 hover:text-gray-900"> All Collections </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                <a href="#" title="" className="text-sm font-medium text-gray-500 hover:text-gray-900"> {router.query.title} </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-3xl text-black font-semibold tracking-tight sm:text-4xl lg:text-5xl"> {router.query.title} </h2>
                        <p className="mt-4 text-black font-normal leading-7  lg:text-lg lg:mt-6 lg:leading-8">This is list article of category {router.query.title} </p>
                    </div>
                    {loading ? (
                        <div className="text-center mt-14">
                            <div role="status">
                                <svg aria-hidden="true" className="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-400 fill-gray-200" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        Array.isArray(articles) && articles?.map((item, index) => (
                            <div key={index} className="flow-root max-w-5xl mx-auto mt-12 space-y-20 sm:mt-16 lg:mt-20">
                                <div className="-my-10 divide-y divide-gray-800 text-black">
                                    <div className="flex flex-col py-10 sm:flex-row sm:items-center group">
                                        <a href="#" title="" className="flex overflow-hidden shrink-0 rounded-xl">
                                            <img className="md:w-60 transition-all duration-200 sm:w-auto sm:h-32 object-cover group-hover:scale-110" src={ item.cover !== null ? item.cover : `https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/2/blog-thumbnail-1.png`} alt="" />
                                        </a>
                    
                                        <div className="flex-1 mt-6 sm:mt-0 sm:ml-6 lg:ml-8">
                                            <h3 className="max-w-xs text-xl font-semibold group-hover:text-[#5423E7]">
                                                <a href={item.public_url} title="" className="">{item.title}</a>
                                            </h3>
                                            <p className="mt-4 text-sm font-medium ">{ moment(item.created_time).format('DD MMMM YYYY') }</p>
                                        </div>
                    
                                        <div className="mt-6 sm:mt-0 sm:ml-6">
                                            <a
                                                href={item.public_url}
                                                title=""
                                                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium  transition-all duration-200 bg-transparent border border-gray-700 rounded-full hover:border-blue-600 hover:bg-[#5423E7] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                                                role="button"
                                            >
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </>
    );
}
