import { useEffect, useState } from 'react';
import { UserData } from '../data/UserData';
import { Event } from '../data/EventData';

interface EventWithUserData extends Event {
    organizerData: UserData;
}

async function fetchUserData(organizerId: number): Promise<UserData> {
    try {
        const response = await fetch(`http://localhost:8080/users/${organizerId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        const userData: UserData = await response.json();
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Rethrow the error to be caught by the caller
    }
}

function EventsCards({ numberOfEvents }: { numberOfEvents: number }) {
    const [events, setEvents] = useState<EventWithUserData[]>([]);

    const fetchEvents = async () => {
        try {
            const response = await fetch('http://localhost:8080/events');
            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }
            const eventData: Event[] = await response.json();

            const userPromises: Promise<UserData>[] = eventData.map(event => fetchUserData(event.organizer));

            const userData: UserData[] = await Promise.all(userPromises);

            const eventsWithUserData: EventWithUserData[] = eventData.map((event, index) => ({
                ...event,
                organizerData: userData[index]
            }));

            const formattedEvents: EventWithUserData[] = eventsWithUserData.map(event => ({
                ...event,
                dateandtime: formatDateTime(event.dateandtime)
            }));

            setEvents(formattedEvents.slice(0, numberOfEvents));
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, [numberOfEvents]);

    const handleEventClick = (eventId: number) => {
        window.location.href = `/events/${eventId}`;
    };

    const truncateDescription = (description: string, maxLength: number) => {
        if (description.length > maxLength) {
            return description.slice(0, maxLength) + '...';
        }
        return description;
    };

    const formatDateTime = (dateTime: string): string => {
        const date = new Date(dateTime);
        const formattedDate = date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        return formattedDate;
    };

    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {events.map((item, index) => (
                    <article
                        className="transform transition duration-300 hover:scale-105 max-w-md mx-auto mt-4 border rounded-md cursor-pointer"
                        key={index}
                        onClick={() => handleEventClick(item.id)}
                    >
                        <img
                            src={item.image || '/assets/better-world-logo1.png'}
                            loading="lazy"
                            alt={item.title}
                            className="w-full h-48 rounded-t-md"
                        />
                        <div className="flex mt-2 pt-3 ml-4 mr-2">
                            <div className=" w-10 h-10 rounded-full">
                                <img
                                    src={item.organizerData.image || ''}
                                    className="w-full h-full rounded-full"
                                    alt={item.organizerData.firstname}
                                />
                            </div>
                            <div className="ml-3">
                                <span className="block text-gray-900 text-left">
                                    {item.organizerData.firstname} {item.organizerData.surname}
                                </span>
                                <span className="block text-gray-400 text-left text-xs">
                                    {item.dateandtime}
                                </span>
                            </div>
                        </div>
                        <div className="px-6 py-4 flex flex-col items-start mb-3">
                            <h3 className="text-base text-gray-900">{item.title}</h3>
                            <p className="text-gray-400 text-sm mt-1 font-normal text-justify">
                                {truncateDescription(item.explanation, 130)}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default EventsCards;
