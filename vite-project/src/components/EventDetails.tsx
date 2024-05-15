import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
}

function EventDetails() {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/events/dto/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch event data');
        }
        return response.json();
      })
      .then((data: Event) => {
        setEvent(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!event) {
    return <div className='my-32'>No se ha podido encontrar este evento</div>;
  }

  return (
        <>
        <div>
          <h2>{event.title}</h2>
          <p>{event.explanation}</p>
          <img src={event.image} alt={event.title} />
          <p>Location: {event.location}</p>
          <p>Duration: {event.duration}</p>
          <p>Date and Time: {new Date(event.dateandtime).toLocaleString()}</p>
          <p>Categories: {event.categories}</p>
          <p>Organizer: {event.organizer}</p>
          {/* You can add more details as needed */}
      </div>
      <div>
    </div> 
    </>
  );
}

export default EventDetails;
