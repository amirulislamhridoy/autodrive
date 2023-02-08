import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyOrders = () => {
    const router = useRouter()
    const [user, loading] = useAuthState(auth);
    const email = user?.email
    const [cars, setCars] = useState([])

    useEffect(() => {
        if(email){
            axios.get(`http://localhost:5000/booking/myCar?email=${email}`)
            .then(res => setCars(res.data))
            .catch(err => {
                toast.error(err?.response?.data)
            })
        }
    }, [email])
    if (loading) {
        return <Loading />
    }
    if (!user) {
        router.push('/login')
    }
    return (
        <DashboardLayout>
            <div>
                my orders
            </div>
        </DashboardLayout>
    );
};

export default MyOrders;