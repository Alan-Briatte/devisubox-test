import React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@mui/material';
import { TicketMasterEvent } from '../../types/Events';
import MyEvent from '../MyEvent';
import { EventsState } from '../../store/redux';

function ListContainer() {

    const store = useSelector((state: EventsState) => state.events);

    return (
        <List>
            {
                //@ts-ignore
                store.events.map((elem: TicketMasterEvent, key: number) => (
                    <MyEvent key={key} elem={elem}></MyEvent>
                ))
            }
        </List>
    );
}

export default ListContainer;