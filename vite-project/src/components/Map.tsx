import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface Event {
  id: number;
  title: string;
  lat: string;
  lon: string;
}

function Map() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Fetch event data from the API
    fetch('http://localhost:8080/events')
      .then(response => response.json())
      .then((data: Event[]) => setEvents(data)) // Specify the type of data received from the API
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <section className="margin-b-14">
      <LoadScript googleMapsApiKey="AIzaSyCYoMq2PBZJ7yvJ_Ju-H1pTUwd3dVIZOvQ">
        <GoogleMap
          mapContainerStyle={{
            width: "100vw",
            height: "60vh",
          }}
          center={{
            lat: 41.14270428199402,
            lng: 1.1011896387438063,
          }}
          zoom={10}
        >
          {events.map(event => (
            <Marker
              key={event.id}
              position={{
                lat: parseFloat(event.lat),
                lng: parseFloat(event.lon),
              }}
              onClick={() => alert(`Marker clicked for event: ${event.title}`)}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </section>
  );
}

export default Map;
