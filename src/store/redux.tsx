import { configureStore, createSlice } from '@reduxjs/toolkit';
import { TicketMasterEvent } from '../types/Events';

export interface EventsState {
    events: TicketMasterEvent[];
}

const initialState: EventsState = {
    events: []
};

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        storeEvents: (state, action) => {
            state.events = action.payload;
        }
    }
});

export const store = configureStore({
    reducer: {
        events: eventsSlice.reducer
    }
});

export const storeEvents = (events: TicketMasterEvent) => {
    return {
        type: 'events/storeEvents',
        payload: events
    };
};