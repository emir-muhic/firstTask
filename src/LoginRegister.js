import { useState } from "react"
import Modal from "./Modal"
import { useHistory } from "react-router-dom";
import { auth, db } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

const LoginRegister = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')

    const [modal, setModal] = useState(false)
    const [modalEmail, setModalEmail] = useState('')

    const history = useHistory()

    // Login function
    const loginHandler = async (e) => {
        // Disable refresh
        e.preventDefault()

        // Setting email for Modal
        setModalEmail(loginEmail)

        // Sign in user
        await signInWithEmailAndPassword(auth, loginEmail, loginPassword)

        // If user not have full name and bio in db (show Modal)
        const usersCollectionRef = collection(db, "users")
        const q = query(usersCollectionRef, where("user_email", "==", loginEmail), where("user_name", "==", ''));
        const getUsers = async () => {
            const data = await getDocs(q)
            if(data.docs.length > 0){
                setModalEmail(loginEmail)
                setModal(true)
            } else {
                // Redirect user to dashboard
                return history.push('/dashboard')
            }
        }
        getUsers()
    }

    // Sign Up function
    const signUpHandler = (e) => {
        // Disable refresh
        e.preventDefault()

        // Setting email for Modal
        setModalEmail(signUpEmail)

        // Create user
        createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((userCredential) => {
            // Signed in 
            // Adding user email to db
            addDoc(collection(db, "users"), { user_email: signUpEmail, user_name: '', user_bio: '' });
            // Show modal for user name and bio
            setModal(true)
        })
    }

    return (
        <div className="w-4/5 mx-auto">
            <h2 className="text-4xl text-center mb-20 mt-20 font-extrabold dark:text-white">Log in to see all posts</h2>
            <div className="mb-9 mt-9 flex justify-evenly" id="login">
                <form onSubmit={loginHandler} className="lg:w-1/3 md:w-full sm:w-full">
                    <h2 className="text-4xl mb-4 font-extrabold dark:text-white">Login</h2>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                </form>
                <div className="wrapper">
                    <div className="line"></div>
                    <div className="wordwrapper">
                        <div className="word">or</div>                                        
                    </div>
                </div>
                <form onSubmit={signUpHandler} className="lg:w-1/3 md:w-full sm:w-full">
                    <h2 className="text-4xl mb-4 font-extrabold dark:text-white">Sign up</h2>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} type="email" id="signUpEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} type="password" id="signUpassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                </form>
            </div>
            {/* SHOW / HIDE MODAL */}
            {modal && <Modal email={modalEmail} />}
        </div>
    )
}

export default LoginRegister