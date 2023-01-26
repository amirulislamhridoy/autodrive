import { useState } from "react"
import { toast } from "react-toastify"

const useToken = (user) => {
    const [token, setToken] = useState(false)
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