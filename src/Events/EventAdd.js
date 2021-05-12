import React from 'react';
import PropTypes from 'prop-types';

const EventAdd = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="flex flex-col mb-2">
                <input className="p-2" id="name" type="text" placeholder="Name" value={props.newName} onChange={(e) => props.onInputChange(e, 'newName')} />
                <label className="text-xs text-red-400" style={props.nameValid ? { display: 'none' } : { display: 'inline' }} htmlFor="name">Pole jest wymagane!</label>
            </div>
            <div className="flex flex-col mb-2">
                <input className="p-2" id="place" type="text" placeholder="Place" value={props.newPlace} onChange={(e) => props.onInputChange(e, 'newPlace')} />
                <label className="text-xs text-red-400" style={props.placeValid ? { display: 'none' } : { display: 'inline' }} htmlFor="place">Pole jest wymagane!</label>
            </div>
            <div className="flex flex-col mb-2">
                <input className="p-2" id="date" type="text" placeholder="YYYY-MM-DD" value={props.newDate} onChange={(e) => props.onInputChange(e, 'newDate')} />
                <label className="text-xs text-red-400" style={props.dateValid ? { display: 'none' } : { display: 'inline' }} htmlFor="date">Pole jest wymagane!</label>
            </div>
            <div className="flex flex-col mb-2">
                <input className="p-2" id="time" type="text" placeholder="HH:MM" value={props.newTime} onChange={(e) => props.onInputChange(e, 'newTime')} />
                <label className="text-xs text-red-400" style={props.timeValid ? { display: 'none' } : { display: 'inline' }} htmlFor="time">Pole jest wymagane!</label>
            </div>
            <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded border border-gray-700 inline-flex items-center my-4"
                type="submit">Dodaj</button>
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