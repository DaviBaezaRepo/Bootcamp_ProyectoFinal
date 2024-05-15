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
/*  organizer: string;
  lat: string;
  lon: string; */
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
    <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 justify-between md:px-8 lg:flex">
            <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    {event.title}
                </h3>



                <p className="mt-3 max-w-xl mx-auto lg:mx-0">
                    {event.explanation}                
                </p>
                <img src={event.image} alt={event.title} />
            </div>
            <div className="mt-12 lg:mt-0">
                <ul className="flex flex-col items-start gap-x-12 justify-center divide-y sm:divide-y-0 sm:flex-row lg:grid lg:grid-cols-2">
                        <li className="text-center w-full px-4 py-6 sm:w-auto lg:py-4">
                            <h4 className="text-4xl text-indigo-600 font-semibold">{event.location}</h4>
                            <p className="mt-3 font-medium">Location</p>
                        </li>
                        <li className="text-center w-full px-4 py-6 sm:w-auto lg:py-4">
                            <h4 className="text-4xl text-indigo-600 font-semibold">{event.duration}</h4>
                            <p className="mt-3 font-medium">Duration</p>
                        </li>
                        <li className="text-center w-full px-4 py-6 sm:w-auto lg:py-4">
                            <h4 className="text-4xl text-indigo-600 font-semibold">{new Date(event.dateandtime).toLocaleString()}</h4>
                            <p className="mt-3 font-medium">Date and Time</p>
                        </li>
                </ul>
            </div>
        </div>
    </section>


    </>
  );
}

export default EventDetails;
