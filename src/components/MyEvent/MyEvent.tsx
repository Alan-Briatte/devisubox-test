import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import { TicketMasterEvent } from '../../types/Events';

function MyEvent(props: { elem: TicketMasterEvent }) {

    const {elem} = props;

    return (<ListItem>
        {
            elem.address ?
                <ListItemText primary={elem.city.name} secondary={elem.address.line1}>
                </ListItemText> : null
        }
    </ListItem>);
}

export default MyEvent;