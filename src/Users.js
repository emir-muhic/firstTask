import { useEffect, useState } from "react"
import Restrict from "./Restrict"

const Users = () => {
    const [users, setUsers] = useState([])

    // Getting JSON data 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            return res.json()
        })
        .then(data=> {
            setUsers(data)
        })
    }, [])

    return (
        <div>
            <div className="container flex justify-center mx-auto pt-16">
                <div>
                    <p className="text-gray-500 text-lg text-center font-normal pb-3">OUR USERS</p>
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">People who are responsible for the quality of posts</h1>
                </div>
            </div>
            <div className="w-full px-10 pt-10">
                <div className="container mx-auto">
                    <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                        {users.map((user) => ( 
                        <div className="mr-2 xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5" key={user.id}>
                            <div className="rounded overflow-hidden shadow-md bg-white">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img src="/22.jpg" alt="" className="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div className="px-6 mt-16 mb-10">
                                    <div className="font-bold text-2xl text-center pb-1">{user.name}</div>
                                    <p className="text-gray-800 text-sm text-center">@{user.username}</p>
                                    <p className="text-gray-600 text-base pt-3 font-normal">
                                        <span className="font-bold text-2xl">User Info:</span> <br />
                                        <span className="font-bold">Email</span>: {user.email} <br />
                                        <span className="font-bold">Phone</span>: {user.phone} <br />
                                        <span className="font-bold">Website</span>: {user.website} <br />
                                        <span className="font-bold">Street</span>: {user.address.street} <br />
                                        <span className="font-bold">Suite</span>: {user.address.suite} <br />
                                        <span className="font-bold">City</span>: {user.address.city} <br />
                                        <span className="font-bold">Zipcode</span>: {user.address.zipcode} <br />
                                        <span className="font-bold mb-10">Company name</span>: {user.company.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Checking if the user is logged in */}
            <Restrict />
        </div>
    )

}

export default Users