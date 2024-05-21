import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Map from "./Map";
import { getUserData, isLogged } from '../lib/authUtils';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { UserData } from "../data/UserData";


interface User {
  id: number;
  firstname: string;
  surname: string;
  image: string;
}

interface Event {
  id: number;
  title: string;
  explanation: string;
  image: string;
  location: string;
  duration: string;
  dateandtime: string;
  categories: string;
  organizer: string;
  lat: string;
  lon: string;
  userList: User[];
}

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [organizer, setOrganizer] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUserData] = useState<UserData | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/events/dto/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch event data");
        }
        return response.json();
      })
      .then((data: Event) => {
        setEvent(data);
        setLoading(false);
        return fetch(`http://localhost:8080/users/${data.organizer}`);
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch organizer data");
        }
        return response.json();
      })
      .then((organizerData: User) => {
        setOrganizer(organizerData);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);








  useEffect(() => {
    const userData = getUserData();
    setUserData(userData);
    if (event && userData) {
      setIsSubscribed(event.userList.some(user => user.id === userData.sub));
    }
  }, [event]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!event) {
    return <div className="my-32">No se ha podido encontrar este evento</div>;
  }

  const formattedDate = new Date(event.dateandtime).toLocaleString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const userData = getUserData();

  const subscribeOrUnsubscribe = async () => {
    if (!user || !event) return;
    if (isSubscribed) {
      await unsubscribe();
      setIsSubscribed(false);
    } else {
      await subscribe();
      setIsSubscribed(true);
    }
  };

  async function subscribe() {
    const response = await fetch(`http://localhost:8080/users/${userData?.sub}/subscribe-event/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error al subscribirse al evento');
    }
    toast.success('Se ha subscrito al evento con éxito', { autoClose: 1000, onClose: () => document.location.reload() });
  }

  async function unsubscribe() {
    const response = await fetch(`http://localhost:8080/users/${userData?.sub}/subscribe-event/delete/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error al eliminar su subscripción al evento');
    }
    toast.success('Se ha eliminado su subscripción al evento con éxito', { autoClose: 1000, onClose: () => document.location.reload() });
  }


  const handleSubmitFavorites = async (event: React.MouseEvent<SVGElement>) => {
    try {
      const response = await fetch(`http://localhost:8080/users/save-event/${user?.sub}/${id}`, {
        method: "POST"
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      setIsSaved(true);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


  const handleRemoveFavorites = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const response = await fetch(`http://localhost:8080/users/save-event/delete/${user?.sub}/${id}`, {
        method: "PUT"
      });

      if (!response.ok) {
        throw new Error('Failed to delete user data');
      }
      setIsSaved(false);
    } catch (error) {
      console.error('Error deleting user data:', error);
    }
  };


  return (
    <>
      <section className="py-14 px-14">
        <div className="mx-auto px-4 text-gray-600 gap-x-16 justify-around md:px-8 lg:flex">
          {/* Body */}
          <div className="mx-auto text-center lg:text-left lg:mx-0">
            <h3 className="text-gray-600 text-3xl font-bold sm:text-4xl">
              {event.title}
            </h3>
            <p className="mt-3 font-light">
              {formattedDate}, organizado por <span className="italic"> {organizer?.firstname} {organizer?.surname} </span>
            </p>
            <p className="mt-8 text-gray-700 text-justify mx-auto lg:mx-0 text-lg">{event.explanation}</p>
            <img src={event.image} alt={event.title} className="mt-4 rounded-md" />
          </div>
          <section>
            {/* Event info */}
            <div className="mb-4 mt-8 lg:mt-0">
              <div className="flex flex-col items-start justify-center divide-y sm:divide-y-0">
                <div className="w-full min-w-max max-w-lg p-4 border border-gray-200 rounded-lg shadow sm:p-8">
                  <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200">
                      <div className="sm:py-4" >
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="w-10 h-10 rounded-full"
                              src={organizer?.image}
                            />
                          </div>
                          <div className="min-w-0 ms-4">
                            <p className="text-sm font-bold text-gray-900 truncate">
                              {`${organizer?.firstname} ${organizer?.surname}`}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 mt-5 items-start">
                          <p className="text-sm text-black font-semibold">UBICACIÓN</p>
                          <p className="text-sm text-gray-500">{event.location}</p>
                          <p className="text-sm text-black font-semibold mt-3">FECHA</p>
                          <p className="text-sm text-gray-500">{formattedDate}</p>

                          {isLogged() && (
                            <>
                              {userData && event.userList?.find((user) => user.id === parseInt(userData.sub)) ? (
                                <button
                                  className="mt-3 w-full button2 text-white py-2 rounded"
                                  onClick={unsubscribe}
                                >
                                  Dejar de participar
                                </button>
                              ) : (
                                <button
                                  className="mt-3 w-full button2 text-white py-2 rounded"
                                  onClick={subscribe}
                                >
                                  Participar
                                </button>
                              )}

                              {isSaved ? (
                                <button
                                  className="mt-3 w-full button2 text-white py-2 rounded"
                                  onClick={handleRemoveFavorites}
                                >
                                  Eliminar de Guardados
                                </button>
                              ) : (
                                <button
                                  className="mt-3 w-full button2 text-white py-2 px-4 rounded"
                                  onClick={handleSubmitFavorites}
                                >
                                  Guardar
                                </button>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Attendees */}
            <div className="my-8 lg:mt-0">
              <div className="flex flex-col items-start justify-center divide-y sm:divide-y-0">
                <div className="w-full min-w-max max-w-lg p-4 border border-gray-200 rounded-lg shadow sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-medium leading-none text-gray-900 pr-6">
                      Participantes
                    </h5>
                    <a
                      href="#"
                      className="text-sm font-medium green-text hover:underline"
                    >
                      Ver todo
                    </a>
                  </div>
                  <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200">
                      {event.userList.map((user) => (
                        <li key={user.id} className="py-3 sm:py-4">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <img
                                className="w-8 h-8 rounded-full"
                                src={user.image}
                                alt={`${user.firstname} ${user.surname}`}
                              />
                            </div>
                            <div className="min-w-0 ms-4">
                              <p className="text-sm font-semibold text-gray-900 truncate">
                                {user.firstname} {user.surname}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/*Map section*/}
      <Map latitude={event.lat} longitude={event.lon} />
    </>
  );
};

export default EventDetails;