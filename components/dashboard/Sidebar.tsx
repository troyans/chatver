import Link from "next/link";


const Sidebar = ({children, statusConnection = false}) => (
    <div className="flex flex-col bg-white min-h-screen">
        <div className="flex flex-1">
            <div className="hidden xl:flex xl:w-64 xl:flex-col">
                <div className="flex flex-col pt-5 overflow-y-auto">
                    <div className="flex flex-col justify-between flex-1 h-full px-4">
                        <div className="space-y-4">
                            <div>
                                <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">Support</p>
                                <nav className="flex-1 mt-4 space-y-1">

                                    <a href="#" title="" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group">
                                        <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                        </svg>
                                        Setup
                                    </a>
                                    {
                                        statusConnection && (
                                            <Link href="/help-center" title="" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group">
                                                <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                                </svg>
                                                Help center
                                            </Link>
                                        )
                                    }
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    </div>
)

export default Sidebar;
