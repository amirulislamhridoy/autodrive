import { useRouter } from 'next/router';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';
import DashboardLayout from '../../components/Layout/DashboardLayout';

const ManageOrders = () => {
    const router = useRouter()
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading />
    }
    if (!user) {
        router.push('/login')
    }
    return (
        <DashboardLayout>
            <div>
                manage orders
            </div>
        </DashboardLayout>
    );
};

export default ManageOrders;