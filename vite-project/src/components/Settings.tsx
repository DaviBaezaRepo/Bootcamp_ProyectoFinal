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
            {showDeleteModal && (
                <div id="deleteModal" tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center h-screen bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative p-4 text-center bg-white rounded-lg shadow sm:p-5">
                            <p className="mb-4 text-gray-700">{firstname}, ¿Estás seguro de que quieres eliminar la cuenta?</p>
                            <p className="mb-4 text-xs text-gray-500">Todos los datos y eventos creados desde esta cuenta serán eliminados.</p>
                            <div className="flex justify-center items-center space-x-4">
                                <button onClick={() => setShowDeleteModal(false)} type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:z-10">
                                    No, cancelar
                                </button>
                                <button onClick={deleteAccount} type="button" className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300">
                                    Sí, estoy seguro
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Settings;
