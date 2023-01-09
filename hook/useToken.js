import { useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState(false)
    const email = user?.user?.email
    if (email) {
        fetch(`http://localhost:5000/login?email=${email}`)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.token)
                setToken(true)
            })
            .catch(error => console.log(error))
    }
    return[token, setToken]
}

export default useToken;