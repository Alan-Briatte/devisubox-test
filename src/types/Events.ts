export type TicketMasterEvent = {
    address?: {
        line1?: string;
        line2?: string;
    };
    city: {
        name: string
    };
    country: {
        name: string;
        countryCode: string;
    };
    id: string;
    locale: string;
    location: {
        longitude: string;
        latitude: string;
    };
    name: string;
    postalCode: string;
    test: boolean;
    timezone: string;
    type: string;
    upcomingEvents: {
        _filtered: number;
        _total: number;
    }
}