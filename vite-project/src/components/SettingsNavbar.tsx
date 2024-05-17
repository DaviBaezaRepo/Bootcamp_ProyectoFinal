import React, { useEffect, useState } from 'react';
import { getUserData, logout } from '../lib/authUtils';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate, Route, Router, Routes } from 'react-router-dom';
import { UserData } from '../data/UserData';

const Navbar: React.FC = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false); // State to manage modal visibility

    const [firstname, setFirstname] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const userData = getUserData();
            if (!userData) Navigate({ to: '/' });
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
                setFirstname(data.firstname)
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
        setShowDeleteModal(true); // Show the delete modal when the user clicks "eliminar usuario"
    };

    async function deleteAccount () {
        const userData = getUserData();
        const response = await fetch(`http://localhost:8080/users/${userData?.sub}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
            <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
                <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>
                <Link to="profile" className="flex items-center px-3 py-2.5 font-bold border rounded-full">
                    Perfil
                </Link>
                <Link to="my-events" className="flex items-center px-3 py-2.5 font-semibold hover:border hover:rounded-full">
                    Mis eventos
                </Link>
                <Link to="saved-events" className="flex items-center px-3 py-2.5 font-semibold hover:border hover:rounded-full">
                    Eventos guardados
                </Link>
                <a onClick={handleDeleteUserClick} className="cursor-pointer flex items-center px-3 py-2.5 font-semibold hover:border hover:rounded-full">
                    Eliminar cuenta
                </a>
            </div>
        </aside>
    );
};

export default Navbar;
