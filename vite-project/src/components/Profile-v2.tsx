import { useState, useEffect } from 'react';
import { getUserData, logout } from '../lib/authUtils';
import { Navigate } from 'react-router-dom';
import { UserData } from '../data/UserData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPencilAlt } from 'react-icons/fa'; // Importar el icono de lápiz

const Profile2 = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [entity, setEntity] = useState('');
    const [isEditing, setIsEditing] = useState(false); // Estado para el modo de edición

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
                setSurname(data.surname);
                setEmail(data.email);
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
            image: userData?.image || '',
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
            toast.success('Cambios guardados con éxito', { autoClose: 2000});
            setIsEditing(false); // Salir del modo de edición

        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Unknown error occurred');
            }
        }
    };

    async function deleteAccount() {
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
        logout();
        Navigate({ to: '/' });
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
        <main className="w-full flex flex-col items-center justify-center px-4 pt-3">
            <div className="w-full text-gray-600 sm:max-w-md">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Perfil del Usuario</h3>
                    </div>
                </div>

                <div className="p-4 py-6 sm:p-6">
                    <div className="space-y-5">
                        <ToastContainer />
                        <img src={userData.image} alt="" className='rounded-full mx-auto w-55' />
                        <div className="text-right">
                            <button onClick={() => setIsEditing(!isEditing)} className="text-blue-500">
                                <FaPencilAlt />
                            </button>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="font-medium">Nombre</label>
                                <input
                                    type="text"
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-color shadow-sm rounded-lg"
                                    readOnly={!isEditing} // Campo editable solo en modo de edición
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="font-medium">Apellidos</label>
                                <input
                                    type="text"
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-color shadow-sm rounded-lg"
                                    readOnly={!isEditing} // Campo editable solo en modo de edición
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-color shadow-sm rounded-lg"
                                readOnly={!isEditing} // Campo editable solo en modo de edición
                            />
                        </div>
                        {userData.isEntity && (
                            <div>
                                <label className="font-medium">Nombre de la empresa</label>
                                <input
                                    type="text"
                                    value={entity}
                                    onChange={(e) => setEntity(e.target.value)}
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-color shadow-sm rounded-lg"
                                    readOnly={!isEditing} // Campo editable solo en modo de edición
                                />
                            </div>
                        )}
                        <div className="flex gap-6 justify-center">
                            {isEditing && (
                                <button
                                    onClick={handleSaveChanges}
                                    className="w-full mt-4 px-4 py-2 text-white bg-blue-500 rounded-lg">
                                    Guardar cambios
                                </button>
                            )}
                            <button
                                onClick={deleteAccount}
                                className="w-full mt-4 px-4 py-2 text-white bg-red-500 rounded-lg">
                                Borrar cuenta
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Profile2;
