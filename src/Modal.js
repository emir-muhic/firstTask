import { useState } from "react"
import { db } from './firebase'
import { useHistory } from "react-router-dom"
import { collection, getDocs, query, where, updateDoc, doc } from "firebase/firestore"

const Modal = (props) => {
    const email = props.email

    const [fullName, setFullName] = useState('')
    const [userBio, setUserBio] = useState('')
    const history = useHistory()

    const completeProfile = async (e, email) => {
        // Disable refresh
        e.preventDefault()

        // Adding user name and bio to db
        const q = query(collection(db, "users"), where("user_email", "==", email));
        const getDocumentId = async (email) => {
        const querySnapshot = await getDocs(q);
        await querySnapshot.forEach((docSnapshot) => {
            const id = docSnapshot.id;
            const userDoc = doc(db, "users", id)
            const newFields = {user_name: fullName, user_bio: userBio}
            updateDoc(userDoc, newFields)
        });
        }
        getDocumentId(email)

        // Redirect user to dashboard
        history.push("/dashboard")
        
    }


    return (
        <div className="overflow-y-auto overflow-x-hidden fixed z-50 bg-[#a6a6fff2] w-full md:inset-0 h-modal md:h-full">
            <div className="relative p-4 w-full max-w-md mx-auto top-2/4 -translate-y-2/4 h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="py-6 px-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Set your full name and bio</h3>
                        <form onSubmit={(e) => completeProfile(e, email)} className="space-y-6">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your full name</label>
                                <input onChange={(e) => setFullName(e.target.value)} value={fullName} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Smith" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your bio</label>
                                <textarea onChange={(e) => setUserBio(e.target.value)} value={userBio} placeholder="Your bio" rows="5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required></textarea>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal