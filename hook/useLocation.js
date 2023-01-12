import { useEffect, useState } from "react"

const useLocation = () =>{
    const [locations, setLocations] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/location/getAll')
            .then(res => res.json())
            .then(data => setLocations(data))
            .catch(e => console.log(e))
    }, [])
    return [locations, setLocations]
}

export default useLocation;