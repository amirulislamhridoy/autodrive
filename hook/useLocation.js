import { useEffect, useState } from "react"

const useLocation = () =>{
    const [locations, setLocations] = useState([])
    useEffect(() => {
        fetch('https://autodrive-server.vercel.app/location/getAll')
            .then(res => res.json())
            .then(data => setLocations(data))
            .catch(e => console.log(e))
    }, [])
    return [locations, setLocations]
}

export default useLocation;