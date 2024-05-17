import React, { useEffect, useState } from 'react';
import { getUserData, logout } from '../lib/authUtils';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { UserData } from '../data/UserData';
import { ToastContainer } from 'react-toastify';
import Profile from './Profile';
import MyEvents from './MyEvents';
import SavedEvents from './SavedEvents';
import Navbar from './SettingsNavbar';

const Settings: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [firstname, setFirstname] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const userData = getUserData();
            if (!userData) return <Navigate to="/" />;
            const token = localStorage.getItem('token');
            if (!token) {
                setError('No token found');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch('http://localhost:8080/users/' + userData!.sub, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Error fetching user data');
                }

                const data: UserData = await response.json();
                setFirstname(data.firstname);
                setLoading(false);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('Unknown error occurred');
                }
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleDeleteUserClick = () => {
        setShowDeleteModal(true);
    };

    const deleteAccount = async () => {
        const userData = getUserData();
        const response = await fetch(`http://localhost:8080/users/${userData?.sub}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            logout(); // Handle logout after account deletion
            return <Navigate to="/" />;
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <ToastContainer />
            <div className="w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
                <Navbar />
                <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
                    <Routes>
                        <Route path="profile" element={<Profile />} />
                        <Route path="my-events" element={<MyEvents />} />
                        <Route path="saved-events" element={<SavedEvents />} />
                    </Routes>
                </main>
            </div>
        </>
    );
};

export default Settings;
