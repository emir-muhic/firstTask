import { signOut } from "firebase/auth"
import { useLocation, Link } from "react-router-dom"
import { auth } from "./firebase"

// Function to sign out
const SignOut = () => {
    signOut(auth)
}

const Nav = () => {
    // Checking user location (specific nav for home page)
    const location = useLocation()
    if(location.pathname === '/')

    return (
        <>
            <Link to="/" className="font-medium text-gray-500 hover:text-gray-900">Home</Link>
            <a href="#pricing" className="font-medium text-gray-500 hover:text-gray-900">Pricing</a>
            <a href="#login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a>
        </>
    )
    else
    return (
        <>
            <Link to="/dashboard" className="font-medium text-gray-500 hover:text-gray-900">Dashboard</Link>
            <Link to="/users" className="font-medium text-gray-500 hover:text-gray-900">Users</Link>
            <Link to="/posts" className="font-medium text-gray-500 hover:text-gray-900">Posts</Link>
            <Link to="/profile" className="font-medium text-gray-500 hover:text-gray-900">My Profile</Link>
            <div onClick={SignOut} className="cursor-pointer inline font-medium text-indigo-600 hover:text-indigo-500">Sign out</div>
        </>
    )
}

export default Nav