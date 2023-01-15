import Navbar from "../../../components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

const Index = () => {
    const [data, setData] = useState({})
    const router = useRouter()
    const { id } = router.query
    if(id){
        // fetch(`http://localhost:5000/car/getCar/${id}`).then(res => res.json())
        // .then(data => console.log(data))
        axios.get(`http://localhost:5000/car/getCar/${id}`).then(res => {
            setData(res.data)
        })
    }
    return (
        <main>
            <Head><title>CAR DETAILS</title></Head>
            <Navbar>SingleCar</Navbar>
            <div>{id}</div>
        </main>
    );
};

export default Index;
