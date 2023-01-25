import { useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { changeByToken } from "../redux/token"

const useToken = (user) => {
    const [token, setToken] = useState(false)
    const dispatch = useDispatch()
    const email = user?.user?.email
    if (email) {
        fetch(`https://autodrive-server.vercel.app/login?email=${email}`)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.token)
                setToken(true)
            })
            .catch(error => {
                toast.error(error?.message)
            })
    }
    return[token, setToken]
}

export default useToken;