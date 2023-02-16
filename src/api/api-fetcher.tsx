import axios from 'axios';
import { TicketMasterEvent } from '../types/Events';

export const getEvents = async (): Promise<TicketMasterEvent | undefined> => {
    const endpoint = '/discovery/v2/venues.json';
    const baseUrl = 'https://app.ticketmaster.com/';
    const apiKey = '8X6HVGOGo28k9tEihXCuPGKj1ty0aMBd';
    const countryCode = 'FR';
    const params = `?apikey=${apiKey}&countryCode=${countryCode}`;

    try {
        const response = await axios.get(baseUrl + endpoint + params);
        return response.data._embedded.venues;

    } catch (error) {
        console.error(error);
    }
};