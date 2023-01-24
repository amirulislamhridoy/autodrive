import { useRouter } from 'next/router';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../components/Loading';
import Navbar from '../../components/Navbar';
import auth from '../../firebase.init';

const Index = () => {
    const router = useRouter()
    const [user, loading] = useAuthState(auth);

    if(loading){
        return <Loading />
    }
    if(!user){
        router.push('/login')
    }
    return (
        <main>
            <Navbar>Dashboard</Navbar>
        </main>
    );
};

export default Index;