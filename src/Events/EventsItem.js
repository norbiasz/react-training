import React from 'react';
import {
    Link
} from 'react-router-dom'


const EventsItem = (props) => {
    return (
        <li key={props.id}>
            <strong>{props.item.name}</strong><br />
            <Link className="underline text-blue-400 hover:no-underline mr-2" to={'/details/' + props.item.id}>Szczegóły</Link>
            <button className="underline text-blue-400 hover:no-underline ml-2" onClick={() => props.onRemoveEvent(props.item.id)}>Usun</button>
            <br />
        </li>
    );
};

export default EventsItem;