import React from 'react';
import PropTypes from 'prop-types';


const EventAdd = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <input id="name" type="text" placeholder="Nazwa" value={props.newName} onChange={(e) => props.onInputChange(e, 'newName')} />
            <label style={props.nameValid ? { display: 'none' } : { display: 'inline' }} htmlFor="name">Pole jest wymagane!</label><br />

            <input id="place" type="text" placeholder="Miejsce" value={props.newPlace} onChange={(e) => props.onInputChange(e, 'newPlace')} />
            <label style={props.placeValid ? { display: 'none' } : { display: 'inline' }} htmlFor="place">Pole jest wymagane!</label><br />

            <input id="date" type="text" placeholder="Data" value={props.newDate} onChange={(e) => props.onInputChange(e, 'newDate')} />
            <label style={props.dateValid ? { display: 'none' } : { display: 'inline' }} htmlFor="date">Pole jest wymagane!</label><br />

            <input id="time" type="text" placeholder="Godzina" value={props.newTime} onChange={(e) => props.onInputChange(e, 'newTime')} />
            <label style={props.timeValid ? { display: 'none' } : { display: 'inline' }} htmlFor="time">Pole jest wymagane!</label><br />

            <button type="submit">Dodaj</button>
        </form>
    )
}

EventAdd.propTypes = {
    newName: PropTypes.string.isRequired,
    newPlace: PropTypes.string.isRequired,
    newDate: PropTypes.string.isRequired,
    newTime: PropTypes.string.isRequired,
    nameValid: PropTypes.bool.isRequired,
    placeValid: PropTypes.bool.isRequired,
    dateValid: PropTypes.bool.isRequired,
    timeValid: PropTypes.bool.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};


export default EventAdd;