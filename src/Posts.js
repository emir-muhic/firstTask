import { useState, useEffect } from "react"
import Restrict from "./Restrict"

const Posts = () => {
    const [blogs, setBlogs] = useState([])

    // Getting JSON data of posts
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            return res.json()
        })
        .then(data=> {
            setBlogs(data)
        })
    }, [])


    return (
        <div>
            <div className="container flex justify-center mx-auto pt-16">
                <div>
                    <p className="text-gray-500 text-lg text-center font-normal pb-3">OUR POSTS</p>
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The latest news from the world ready just for you</h1>
                </div>
            </div>
            <div className="w-full px-10 pt-10">
                <div className="container mx-auto">
                    <div className="lg:flex md:flex sm:flex items-center flex-wrap md:justify-around sm:justify-around lg:justify-around">
                        
                        {blogs.map((blog) => (
                        <a href="/" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 mb-10 dark:hover:bg-gray-700" key={blog.id}>
                            <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/image-4.jpg" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.body}</p>
                            </div>
                        </a>
                        ))}
                        
                    </div>
                </div>
            </div>
            {/* Checking if the user is logged in */}
            <Restrict />
        </div>
    )
}

export default Posts