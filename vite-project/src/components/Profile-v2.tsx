import React, { useEffect, useState } from 'react';
import { getUserData, logout } from '../lib/authUtils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
import { UserData } from '../data/UserData';

const ProfilePage: React.FC = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false); // State to manage modal visibility

    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [entity, setEntity] = useState('');

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
                setUserData(data);
                setSurname(data.surname)
                setEmail(data.email)
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

    const handleSaveChanges = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('No token found');
            return;
        }

        const updatedUserData: any = {
            firstname,
            surname,
            email,
            image: userData?.image || '/public/assets/user-icon.jpg',
            isEntity: userData?.isEntity || false,
            entity: entity
        };

        try {
            const response = await fetch(`http://localhost:8080/users/${userData?.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedUserData)
            });

            if (!response.ok) {
                throw new Error('Error updating user data');
            }

            const data: UserData = await response.json();
            console.log(data);
            setUserData(data);
            toast.success('Cambios guardados con éxito');
            
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Unknown error occurred');
            }
        }
    };

    async function deleteAccount () {
        const userData = getUserData();
        const response = await fetch(`http://localhost:8080/users/${userData?.sub}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error deleting user data');
        }
        logout()
        Navigate ({to : "/"})

    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!userData) {
        return <p>No user data available</p>;
    }

    return (
        <>
            <div className="w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
                <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
                    <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
                        <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>
                        <a href="/Profile-v2" className="flex items-center px-3 py-2.5 font-bold border rounded-full">
                            Perfil
                        </a>
                        <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:border hover:rounded-full">
                            Mis eventos
                        </a>
                        <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:border hover:rounded-full">
                            Eventos guardados
                        </a>
                        <a onClick={handleDeleteUserClick} type="button" className="cursor-pointer flex items-center px-3 py-2.5 font-semibold hover:border hover:rounded-full">
                            Eliminar cuenta
                        </a>
                    </div>
                </aside>
                <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
                    <ToastContainer />
                    <div className="p-2 md:p-4">
                        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                            <h2 className="pl-6 text-2xl font-bold sm:text-xl">{firstname} {surname}</h2>
                            <div className="grid max-w-2xl mx-auto mt-8">
                                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                                    <img
                                        className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-green-300 dark:ring-green-600"
                                        src={userData.image}
                                        alt="Bordered avatar"
                                    />
                                    <div className="flex flex-col space-y-5 sm:ml-8">
                                        <button
                                            type="button"
                                            className="py-3.5 px-7 text-base font-medium focus:outline-none focus:ring-none rounded-lg border focus:z-10 focus:ring-4 text-white button2 focus:ring-transparent"
                                        >
                                            Cambiar avatar
                                        </button>
                                        <button
                                            type="button"
                                            className="py-3.5 px-7 text-base font-medium focus:outline-none rounded-lg border border-bn hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-transparent"
                                        >
                                            Eliminar avatar
                                        </button>
                                    </div>
                                </div>
                                <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                                    <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                        <div className="w-full">
                                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-green-900">
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                id="first_name"
                                                className="bg-transparent border border-green-800 text-green-900 text-sm rounded-lg block w-full p-2.5"
                                                placeholder="Nombre"
                                                value={firstname}
                                                onChange={(e) => setFirstname(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-green-900">
                                                Apellidos
                                            </label>
                                            <input
                                                type="text"
                                                id="last_name"
                                                className="bg-transparent border border-green-800 text-green-900 text-sm rounded-lg block w-full p-2.5"
                                                placeholder="Your last name"
                                                value={surname}
                                                onChange={(e) => setSurname(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-2 sm:mb-6">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-green-900">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="bg-transparent border border-green-800 text-green-900 text-sm rounded-lg block w-full p-2.5"
                                            placeholder="tu.email@mail.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            onClick={handleSaveChanges}
                                            className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center button2 focus:ring-transparent"
                                        >
                                            Guardar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            {/* Modal eliminar cuenta */}
            {showDeleteModal && (
                <div id="deleteModal" tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center h-screen bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        {/* Modal content */}
                        <div className="relative p-4 text-center bg-white rounded-lg shadow sm:p-5">
                            <p className="mb-4 text-gray-700">{firstname}, ¿Estás seguro de que quieres eliminar la cuenta?</p>
                            <p className="mb-4 text-xs text-gray-500">Todos los datos y eventos creados desde esta cuenta serán eliminados.</p>
                            <div className="flex justify-center items-center space-x-4">
                                <button onClick={() => setShowDeleteModal(false)} type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10">
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

export default ProfilePage;
