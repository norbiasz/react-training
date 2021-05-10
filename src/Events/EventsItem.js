import React from 'react';
import {
    Link
} from 'react-router-dom'


const EventsItem = (props) => {
    return (
        <li key={props.id}>
            <strong>{props.item.name}</strong><br />
            <Link to={'/details/' + props.item.id}>Szczegóły</Link>
            <button onClick={() => props.onRemoveEvent(props.item.id)}>Usun</button>
            <br />
        </li>
    );
};

export default EventsItem;