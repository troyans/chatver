

import { getAlldata } from "@/lib/api/ExternalApi";
import Breadcrumb from "../breadcrumb/Breadcrumb"
import { useQuery } from "react-query";
import { useState } from "react";

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const id = process.env.NOTION_PARENT_PAGE_ID;
    
    useQuery({
        queryKey: "categories",
        queryFn: () => getAlldata(id),
        onSuccess: (res) => {
            setCategories(res.data);
        }
    })
    
    const breadcrumbdata = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "categories",
            link: "/help-center"
        }
    ];
  
    return (
        <div className="flex flex-col gap-y-12 text-center mt-16 md:py-12 px-1 bg-white h-auto min-h-screen ">
            <div className="flex text-left mx-52 gap-x-4">
                <Breadcrumb data={breadcrumbdata} />
            </div>
            <p className="text-5xl text-gray-700 mb-12">Categories</p>
            <div className="flex gap-x-12 justify-center flex-wrap gap-y-8 mx-28">
                {
                    Array.isArray(categories) && categories?.map((item, index) => (
                        <a key={index} href={`/help-center/${item.id}`} className="box-content h-16 w-72 rounded-lg p-4 shadow-CS1 flex flex-col gap-y-2 cursor-pointer hover:shadow-blue-300 items-center justify-center">
                            <p className="text-black text-xl font-bold">{item.title}</p>
                        </a>
                    ))
                }
            </div>
        </div>
    );
}
