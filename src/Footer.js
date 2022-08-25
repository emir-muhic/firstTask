const Footer = () => {
    return (
        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <a href="/" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <img alt="" className="inline h-8 w-auto sm:h-10" src="/logo3.webp" />
                    <div className="inline"> + </div>
                    <img alt="" className="inline h-8 w-auto sm:h-10" src="/logo.png" />
                    <div className="inline"> + </div>
                    <img alt="" className="inline h-8 w-auto sm:h-10" src="/logo2.png" />
                </a>
                <p className="my-6 text-gray-500 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                    <li>
                        <a href="/" className="mr-4 hover:underline md:mr-6 ">Home</a>
                    </li>
                    <li>
                        <a href="#pricing" className="mr-4 hover:underline md:mr-6">Pricing</a>
                    </li>
                    <li>
                        <a href="#login" className="mr-4 hover:underline md:mr-6 ">Login</a>
                    </li>
                    <li>
                        <a href="#team" className="mr-4 hover:underline md:mr-6">Our Team</a>
                    </li>
                    <li>
                        <a href="#newsletter" className="mr-4 hover:underline md:mr-6">Newsletter</a>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Website. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer