import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

const getUserData = async (token: string): Promise<User | null> => {
  try {
    const response = await fetch('http://localhost:8080/users/assigned-events/' + token, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Error fetching user data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

const ToggleSubscription: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [organizer, setOrganizer] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<User | null>(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventResponse = await fetch(`http://localhost:8080/events/dto/${id}`);
        if (!eventResponse.ok) {
          throw new Error("Failed to fetch event data");
        }
        const eventData: Event = await eventResponse.json();
        setEvent(eventData);

        const organizerResponse = await fetch(`http://localhost:8080/users/${eventData.organizer}`);
        if (!organizerResponse.ok) {
          throw new Error("Failed to fetch organizer data");
        }
        const organizerData: User = await organizerResponse.json();
        setOrganizer(organizerData);

        if (token) {
          const user = await getUserData(token);
          setUserData(user);
        }

        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchEventData();
  }, [id, token]);

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

  const handleAttendClick = async () => {
    if (!userData || !event) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/users/${userData.id}/subscribe-event/${event.id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe to event');
      }

      alert('You have successfully subscribed to the event!');
    } catch (error) {
      console.error('Error subscribing to event:', error);
      alert('Failed to subscribe to the event.');
    }
  };

  return (
    <div>
      {/* Renderizar los detalles del evento aquí */}
      <h1>{event.title}</h1>
      <p>{event.explanation}</p>
      <img src={event.image} alt={event.title} />
      <p>{formattedDate}</p>
      <p>{event.location}</p>

      {/* Botón para inscribirse al evento */}
      <button className="mt-3 w-full button2 text-white py-2 rounded" onClick={handleAttendClick}>
        Participar
      </button>
    </div>
  );
};

export default ToggleSubscription;

