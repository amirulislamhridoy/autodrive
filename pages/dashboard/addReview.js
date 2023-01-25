import { useRouter } from 'next/router';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';
import DashboardLayout from '../../components/Layout/DashboardLayout';

const AddReview = () => {
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
                add review
            </div>
        </DashboardLayout>
    );
};

export default AddReview;