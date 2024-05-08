import React, { useEffect, useState } from 'react';

interface Event {
    id: number;
    title: string;
    description: string;
    image: string;
    location: string;
    duration: string;
    dateandtime: string;
    categories: string;
    organizer: number;
}

interface UserData {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    username: string;
    image: string | null;
    entity: string;
}

function EventsCards({ numberOfEvents }: { numberOfEvents: number }) {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    // Fetch events from the API
    const fetchEvents = async () => {
        try {
            const response = await fetch('http://localhost:8080/events');
            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }
            const data: Event[] = await response.json();
            // Slice the array to only include the specified number of events
            setEvents(data.slice(0, numberOfEvents));
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    // Handle clicking on an event
    const handleEventClick = (eventId: number) => {
        // Navigate to the event details page
        window.location.href = `/events/${eventId}`;
    };

    // Function to truncate description to a specified number of characters
    const truncateDescription = (description: string, maxLength: number) => {
        if (description.length > maxLength) {
            return description.slice(0, maxLength) + '...';
        }
        return description;
    };

    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {events.map((item, index) => (
                    <article className="transform transition duration-300 hover:scale-105 max-w-md mx-auto mt-4 border rounded-md" key={index} onClick={() => handleEventClick(item.id)}>
                        <a href={item.href}>
                            <img src={item.image} loading="lazy" alt={item.title} className="w-full h-48 rounded-t-md" />
                            <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                <div className="flex-none w-10 h-10 rounded-full">
                                    <img src={item.authorLogo} className="w-full h-full rounded-full" alt={item.authorName} />
                                </div>
                                <div className="ml-3">
                                    <span className="block text-gray-900">{item.authorName}</span>
                                    <span className="block text-gray-400 text-sm">{item.dateandtime}</span>
                                </div>
                            </div>
                            <div className="pt-3 ml-4 mr-2 mb-3">
                                <h3 className="text-xl text-gray-900">{item.title}</h3>
                                {/* Render truncated description */}
                                <p className="text-gray-400 text-sm mt-1 font-normal description">
                                    {truncateDescription(item.description, 130)}
                                </p>
                            </div>
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default EventsCards;
