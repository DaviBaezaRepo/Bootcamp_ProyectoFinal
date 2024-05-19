import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useNavigate } from 'react-router-dom';

interface Event {
  id: number;
  title: string;
  lat: string;
  lon: string;
}

interface MapProps {
  latitude?: string;
  longitude?: string;
}

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!latitude || !longitude) {
      // Fetch event data from the API only if latitude and longitude are not provided
      fetch('http://localhost:8080/events')
        .then(response => response.json())
        .then((data: Event[]) => setEvents(data))
        .catch(error => console.error('Error fetching events:', error));
    }
  }, [latitude, longitude]);

  const defaultCenter = {
    lat: latitude ? parseFloat(latitude) : 41.14270428199402,
    lng: longitude ? parseFloat(longitude) : 1.1011896387438063,
  };

  const markers = latitude && longitude
    ? [{ id: 0, title: "Event Marker", lat: latitude, lon: longitude }]
    : events;

  const handleTitleClick = (eventId: number) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <section className="margin-b-14">
      <LoadScript googleMapsApiKey="AIzaSyCYoMq2PBZJ7yvJ_Ju-H1pTUwd3dVIZOvQ">
        <GoogleMap
          mapContainerStyle={{
            width: "98.7vw",
            height: "60vh",
          }}
          center={defaultCenter}
          zoom={10}
        >
          {markers.map(event => (
            <Marker
              key={event.id}
              position={{
                lat: parseFloat(event.lat),
                lng: parseFloat(event.lon),
              }}
              onClick={() => setSelectedEvent(event)}
            />
          ))}

          {selectedEvent && (
            <InfoWindow
              position={{
                lat: parseFloat(selectedEvent.lat),
                lng: parseFloat(selectedEvent.lon),
              }}
              onCloseClick={() => setSelectedEvent(null)}
            >
              <div>
                <h2
                  className="cursor-pointer text-blue-600"
                  onClick={() => handleTitleClick(selectedEvent.id)}
                >
                  {selectedEvent.title}
                </h2>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </section>
  );
};

export default Map;
