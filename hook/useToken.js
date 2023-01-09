import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeByToken } from "../redux/token"

const useToken = (user) => {
    const [token, setToken] = useState(false)
    const dispatch = useDispatch()
    const email = user?.user?.email
    if (email) {
        fetch(`http://localhost:5000/login?email=${email}`)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.token)
                dispatch(changeByToken(data.token))
                setToken(true)
            })
            .catch(error => console.log(error))
    }
    return[token, setToken]
}

export default useToken;