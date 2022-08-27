import Nav from "./Nav"

const Header = () => {
    return (
        <div>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <a href="/">
                                <img alt="" className="inline h-8 w-auto sm:h-10" src="/logo3.webp" />
                                <div className="inline"> + </div>
                                <img alt="" className="inline h-8 w-auto sm:h-10" src="/logo.png" />
                                <div className="inline"> + </div>
                                <img alt="" className="inline h-8 w-auto sm:h-10" src="/logo2.png" />
                            </a>
                            <div className="-mr-2 flex items-center md:hidden">
                                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        {/* IMPORTING NAVIGATION */}
                        <Nav />
                    </div>
                </nav>
            </div>
            <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                            <img className="h-8 w-auto" src="/logo3.webp" alt="" />
                        </div>
                        <div className="-mr-2">
                            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="res-nav px-2 pt-2 pb-3 space-y-1">
                        <Nav />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header