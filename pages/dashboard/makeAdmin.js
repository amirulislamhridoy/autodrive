import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../app/toolkit/userSlice';

const MakeAdmin = () => {
    const state = useSelector(state => state.user.data)
    const router = useRouter()
    const dispatch = useDispatch()
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        // dispatch(fetchUser(user))
    }, [user])

    if (loading) {
        return <Loading />
    }
    if (!user) {
        router.push('/login')
    }
    return (
        <DashboardLayout>
            <div>
                make admin
            </div>
        </DashboardLayout>
    );
};

export default MakeAdmin;