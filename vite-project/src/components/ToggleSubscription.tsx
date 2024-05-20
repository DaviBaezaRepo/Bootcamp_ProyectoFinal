import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface UserData {
    id: string;
    // otros campos si es necesario
}

const getUserId = async (): Promise<string | null> => {
    try {
        const response = await fetch('http://localhost:8080/users/assigned-events/' + localStorage.getItem('token'), {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        const data: UserData = await response.json();
        return data.id;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
};

const ToggleSubscription = () => {
    const { eventId } = useParams<{ eventId: string }>();
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserId = async () => {
            const id = await getUserId();
            setUserId(id);
        };

        fetchUserId();
    }, []);

    useEffect(() => {
        if (!userId || !eventId) return;

        // Fetch the initial subscription state from the API
        const checkSubscription = async () => {
            try {
                const response = await fetch(`http://localhost:8080/users/${userId}/is-subscribed/${eventId}`);
                const data = await response.json();
                setIsSubscribed(data.isSubscribed);
            } catch (error) {
                console.error('Error checking subscription:', error);
            }
        };

        checkSubscription();
    }, [userId, eventId]);

    const toggleSubscription = async () => {
        if (!userId || !eventId) return;

        try {
            const url = isSubscribed
                ? `http://localhost:8080/users/${userId}/unsubscribe-event/${eventId}`
                : `http://localhost:8080/users/${userId}/subscribe-event/${eventId}`;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error('Failed to toggle subscription');
            }

            setIsSubscribed((prev) => !prev);
        } catch (error) {
            console.error('Error toggling subscription:', error);
        }
    };

    return (
        <button onClick={toggleSubscription}>
            {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
        </button>
    );
};

export default ToggleSubscription;

