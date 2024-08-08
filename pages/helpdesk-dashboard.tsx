
import { getNotionAccount } from "@/lib/api/ExternalApi";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { FaCheck } from "react-icons/fa";
import Sidebar from "@/components/dashboard/Sidebar";


const HelpdeskDashboard = () => {
    const { data: session, status } = useSession();
    const [statusConnection, setStatusConnection] = useState(false);

    // melakukan request api untuk mengecek apakah akun notion ada menggunakan id user yang login
    const { mutate: getNotionAccountCred } = useMutation({
        mutationKey: 'notionaccount',
        mutationFn: (idAccount: string) => getNotionAccount(idAccount),
        onSuccess: (res) => {
            // jika ada maka ubah informasi state bahwa user sudah punya akun notion yang ter authoriza
            setStatusConnection(true);
        }
    });

    useEffect(() => {
        getNotionAccountCred(session?.user?.id);
        localStorage.setItem('userId', session?.user?.id);
    }, [session]);

    return (
        <Sidebar statusConnection={statusConnection}>
            <section className="py-5 bg-white sm:py-16 lg:py-5">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-6xl mx-auto">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Setup Help Center </h1>
                        </div>
            
                        <div className="grid grid-cols-1 mt-8 lg:grid-cols-5 lg:items-start xl:grid-cols-6 gap-y-10 lg:gap-x-12 xl:gap-x-16">
                            <div className="pt-6 border-t border-gray-200 lg:order-1 lg:col-span-3 xl:col-span-4">
                                <div className="flow-root">
                                    <div className="divide-y divide-gray-200 -my-7">
                                        <div className="py-7">
                                            <div className="flex items-center gap-x-2">
                                                <h2 className="text-base font-bold text-gray-900">1. Notion Authorize</h2>
                                                {statusConnection && <FaCheck className="text-2xl font-bold text-green-700" />}
                                            </div>
            
                                            <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 gap-y-5 gap-x-6">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-600">Click.
                                                    <a href={process.env.NOTION_AUTH_URL} className={`font-semibold text-blue-600 ${statusConnection && 'pointer-events-none'}`}> Here </a> Or click button Authorize to authorize your notion account with us.</p>
                                                    <div className="mt-2">
                                                        {/* <input type="email" id="" name="" placeholder="" className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900" /> */}
                                                        <img src="img/choice-template.png" alt="collection template" />
                                                    </div>
                                                    <p className="text-sm font-medium text-gray-600 mt-2"> Always choice template from us.</p>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div className="py-7 gap-y-10">
                                            <h2 className="text-base font-bold text-gray-900">2. Template Notion</h2>
                                            <div className="mt-6">
                                                <p className="text-sm font-medium text-gray-600"> When you already authorize, template will create automaticly </p>
                                                <div className="mt-2">
                                                    {/* <input type="email" id="" name="" placeholder="" className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900" /> */}
                                                    <img src="img/collection-template.png" alt="collection template" />
                                                </div>
                                                <p className="text-sm font-medium text-gray-600 mt-8">1. Collections is a workspace that you can use to store categories and articles</p>
                                                <p className="text-sm font-medium text-gray-600 mt-8">2. Category is the category of your article, you can rename it as you wish </p>
                                                <p className="text-sm font-medium text-gray-600 mt-8">3. You can save a list of article you want to publish </p>
                                            </div>
                                        </div>

                                        <div className="py-7 gap-y-10">
                                            
                                            <a
                                                aria-disabled="true"
                                                href={process.env.NOTION_AUTH_URL}
                                                type="button"
                                                className={`inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700 cursor-pointer ${statusConnection && 'pointer-events-none'}`}
                                            >
                                                {statusConnection ? "You are connected" : "Notion Authorize"}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Sidebar>
    );
}

export default HelpdeskDashboard;
