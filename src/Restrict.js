import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { auth } from "./firebase"
import { useHistory } from "react-router-dom"

const Restrict = () => {
    const history = useHistory()
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(!user) {
                // Redirect user to homepage
                history.push("/")
            }
        })
        // eslint-disable-next-line
    }, [])
}

export default Restrict