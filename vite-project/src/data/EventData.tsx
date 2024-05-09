import { UserData } from './UserData';

export interface Event {
    id: number;
    title: string;
    description: string;
    image: string;
    location: string;
    duration: string;
    dateandtime: string;
    categories: string;
    organizer: number;
    organizerData: UserData;
}