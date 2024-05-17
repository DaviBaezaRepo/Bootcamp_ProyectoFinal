import React, { useEffect, useState } from 'react';
import { getUserData, logout } from '../lib/authUtils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Router } from 'react-router-dom';
import { UserData } from '../data/UserData';

const Profile: React.FC = () => {
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

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!userData) {
        return <p>No user data available</p>;
    }    return (
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
    )
}

export default Profile