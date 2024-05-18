import { useEffect, useState } from "react";
import Modal from "./CreateEventModal"
import { getUserData } from "../lib/authUtils";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default () => {

    const [events, setEvents] = useState([]);
    const userData = getUserData();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [modalEventId, setModalEventId] = useState(false);

    const handleDeleteEventClick = (id:any) => {
        setShowDeleteModal(true);
        setModalEventId(id);
    };

    useEffect(() => {
        if (userData?.sub) {
            fetch('http://localhost:8080/users/organized-events/' + userData.sub)
                .then(r => r.json())
                .then((response) => {
                    setEvents(response);
                })
                .catch((error) => console.error('Error fetching events:', error));
        }
    }, [userData?.sub]); // This dependency array ensures fetch runs only when userData.sub changes


    async function deleteEvent(id: any) {
        const response = await fetch(`http://localhost:8080/events/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error deleting user data');
        } else {
            toast.success("Se ha eliminado el evento correctamente", { autoClose: 2000 , onClose: () => document.location.reload()} );

        }
    }

    return (
        <div className="max-w-screen-xl mx-auto mt-8 px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h2 className="text-gray-800 font-medium font-bold sm:text-2xl">
                        Eventos creados
                    </h2>
                </div>
                <div className="mt-3 md:mt-0">
                    <Modal modalTitle="Crear nuevo evento" buttonText="Crear" submitText="Crear"></Modal>
                </div>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Título</th>
                            <th className="py-3 px-6"></th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            (events as any).map((item: any, idx: any) => (
                                <tr key={idx}>
                                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                        <img src={item.image} className="w-10 h-10 rounded-full" />
                                        <div>
                                            <Link to={`/events/${item.id}`} className="block text-gray-700 text-sm font-medium">
                                                {item.title}
                                            </Link>
                                        </div>
                                    </td>
                                    <td className="text-right px-6 whitespace-nowrap">
                                        <a href="#" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            <Modal type="update" id={item.id} submitText="Editar" modalTitle="Editar evento" buttonText="Editar" title={item.title} explanation={item.explanation} imageString={item.image} location={item.location} duration={item.duration} dateandtime={item.dateandtime}></Modal>
                                        </a>
                                        <button href="#" onClick={(e) => {
                                            handleDeleteEventClick(item.id);
                                        }} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Eliminar
                                        </button>

                                        
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>

            {showDeleteModal && (
                <div id="deleteModal" tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center h-screen bg-gray-400 bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative p-4 text-center bg-white rounded-lg shadow sm:p-5">
                            <p className="mb-4 text-gray-700">¿Estás seguro de que quieres eliminar el evento?</p>
                            <p className="mb-4 text-xs text-gray-500">El evento y toda su informacion sera eliminada.</p>
                            <div className="flex justify-center items-center space-x-4">
                                <button onClick={() => setShowDeleteModal(false)} type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:z-10">
                                    No, cancelar
                                </button>
                                <button onClick={(e) => {
                                            deleteEvent(modalEventId);
                                        }} type="button" className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300">
                                    Sí, estoy seguro
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="items-start mt-12 justify-between md:flex">
                <div className="max-w-lg">
                    <h2 className="text-gray-800 font-medium font-bold sm:text-2xl">
                        Eventos a los que asisto
                    </h2>
                </div>
            </div>
        </div>
    )
}