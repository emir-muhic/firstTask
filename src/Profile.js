import { getAuth, onAuthStateChanged } from "firebase/auth"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useState, useEffect } from "react"
import { db } from "./firebase"
import Modal from "./Modal"
import { useHistory } from "react-router-dom"

// Getting auth data
const auth = getAuth()

const Profile = () => {
    const [modal, setModal] = useState(false)
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [userBio, setUserBio] = useState('')
    const history = useHistory()

    // Showing Modal on "Edit Profile"
    const editProfile = () => {
        setModal(true)
    }

    // Getting Full name and Bio function
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                // getting email from signed in user
                const email = user.email
                setEmail(email)

                const q = query(collection(db, "users"), where("user_email", "==", email));
                getDocs(q).then(data => {
                    setFullName(data.docs[0]._document.data.value.mapValue.fields.user_name.stringValue)
                    setUserBio(data.docs[0]._document.data.value.mapValue.fields.user_bio.stringValue)
                })
                
            } else{
                // Redirect user to homepage if user not signed in
                history.push("/")
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setModal])
    
    return (
        <div className="flex items-center mt-20 w-full justify-center">
            <div className="max-w-xs">
                <div className="bg-white shadow-xl rounded-lg py-3">
                    <div className="photo-wrapper p-2">
                        <img className="w-32 h-32 rounded-full mx-auto" src="/22.jpg" alt="John Doe" />
                    </div>
                    <div className="p-2">
                        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{fullName}</h3>
                        <table className="text-xs my-3">
                            <tbody>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                    <td className="px-2 py-2">{email}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Bio</td>
                                    <td className="px-2 py-2">{userBio}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="text-center my-3">
                            <div onClick={editProfile} className="inline cursor-pointer text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium">Edit Profile</div>
                        </div>

                    </div>
                </div>
            </div>
            {/* SHOW / HIDE MODAL */}
            {modal && <Modal email={email} edit={true} /> }
        </div>
    )
}

export default Profile