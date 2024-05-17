import React, { useEffect, useState } from 'react';
import { getUserData } from '../lib/authUtils';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, Navigate} from 'react-router-dom';
import { UserData } from '../data/UserData';

const Navbar: React.FC = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState<string>('');

    useEffect(() => {
        const path = location.pathname;
        setActiveLink(path.substring(path.lastIndexOf('/') + 1));
    }, [location]);

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
        <>
            <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
            <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-gray-200 top-12">
                <h2 className="pl-3 mb-4 text-2xl font-semibold">Opciones</h2>
                <Link to="/settings/profile" className={`flex items-center px-3 py-2.5 font-semibold hover:border hover:rounded-full ${activeLink === 'profile' ? 'font-bold border rounded-full green-text' : ''}`}>
                    Perfil
                </Link>
                <Link to="/settings/my-events" className={`flex items-center px-3 py-2.5 font-semibold hover:border hover:rounded-full ${activeLink === 'my-events' ? 'font-bold border rounded-full green-text' : ''}`}>
                    Mis eventos
                </Link>
                <Link to="/settings/saved-events" className={`flex items-center px-3 py-2.5 font-semibold hover:border hover:rounded-full ${activeLink === 'saved-events' ? 'font-bold border rounded-full green-text' : ''}`}>
                    Eventos guardados
                </Link>
                <a onClick={handleDeleteUserClick} className="cursor-pointer flex items-center px-3 py-2.5 font-semibold hover:border hover:rounded-full">
                    Eliminar cuenta
                </a>
            </div>
        </aside>
            {showDeleteModal && (
                <div id="deleteModal" tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center h-screen bg-gray-400 bg-opacity-50">
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

export default Navbar;
