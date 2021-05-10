import React from 'react';
import EventsItem from './EventsItem';
import Filter from './Filter';
import EventAdd from './EventAdd';
import Loader from './Loader';
import { connect } from 'react-redux';
import * as eventsActions from '../Actions/Events'

class Events extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // events: [],
            // filter: '',
            // newName: '',
            // newNameValid: false,
            // newPlace: '',
            // newPlaceValid: false,
            // newDate: '',
            // newDateValid: false,
            // newTime: '',
            // newTimeValid: false,
            // isLoading: true
        }
    }

    componentDidMount() {
        this.props.getEvents()
        // axios.get(`http://frontendinsights.com/events.json`)
        //     .then(res => {
        //         const events = res.data;

        //         this.setState({
        //             events,
        //             isLoading: false
        //         });
        //     })
    };


    onClearEventsList = () => {
        // this.setState({ events: [] });
        this.props.clearEvents()
    };

    onRemoveEvent = (id) => {
        // const filteredArray = this.state.events.filter(item => item.id !== id);
        // this.setState({
        //     events: filteredArray
        // });
        this.props.deleteEvent(id)
    }

    onFilterChange = (event) => {
        const eventName = event.currentTarget.value;
        // this.setState({
        //     filter: newValue
        // })
        this.props.filterEvents(eventName)
    }

    // onChangeName = (event) => {
    //     const newValue = event.currentTarget.value;
    //     this.setState({
    //         newName: newValue
    //     })
    // }

    // onChangePlace = (event) => {
    //     const newValue = event.currentTarget.value;
    //     this.setState({
    //         newPlace: newValue
    //     })
    // }

    // onChangeDate = (event) => {
    //     const newValue = event.currentTarget.value;
    //     this.setState({
    //         newDate: newValue
    //     })
    // }

    // onChangeTime = (event) => {
    //     const newValue = event.currentTarget.value;
    //     this.setState({
    //         newTime: newValue
    //     })
    // }

    onInputChange = (event, field) => {
        const newValue = event.currentTarget.value;
        // this.setState({
        //     [fields]: newValue,
        //     [fields + 'Valid']: newValue.length > 0
        // })
        this.props.formDataEvent(newValue, field)
    }

    onSubmit = (event) => {
        event.preventDefault();

        const {
            newName,
            newPlace,
            newDate,
            newTime,
            newNameValid,
            newPlaceValid,
            newDateValid,
            newTimeValid
        } = this.props.eventsStore;


        if (newNameValid && newPlaceValid && newDateValid && newTimeValid) {
            this.props.addEvent(newName, newPlace, newDate, newTime)
        }

    }

    render() {

        return (
            <div className="flex flex-row">
                <div className="mr-5">
                    <div className="p-4 mb-4 border rounded-md border-gray-400">
                        <Filter filter={this.props.eventsStore.filter} onFilterChange={this.onFilterChange} />
                    </div>

                    <Loader isLoading={this.props.eventsStore.isLoading}>
                        <ul className="p-4 border rounded-md border-gray-400">
                            {
                                this.props.eventsStore.events.map((item) => {
                                    const eventDate = new Date(item.date)
                                    if (eventDate >= Date.now() && item.name.includes(this.props.eventsStore.filter)) {
                                        return (
                                            <EventsItem item={item} onRemoveEvent={(id) => this.onRemoveEvent(id)} key={item.id} />
                                        )
                                    }
                                    return null;
                                })
                            }
                        </ul>
                    </Loader>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded border border-gray-700 inline-flex items-center my-4"
                        onClick={this.onClearEventsList}>Clear</button>
                </div>
                <div className="p-4 border rounded-md border-gray-400">
                    <EventAdd
                        newName={this.props.eventsStore.newName}
                        newPlace={this.props.eventsStore.newPlace}
                        newDate={this.props.eventsStore.newDate}
                        newTime={this.props.eventsStore.newTime}
                        nameValid={this.props.eventsStore.newNameValid}
                        placeValid={this.props.eventsStore.newPlaceValid}
                        dateValid={this.props.eventsStore.newDateValid}
                        timeValid={this.props.eventsStore.newTimeValid}
                        onInputChange={this.onInputChange}
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearEvents: () => dispatch(eventsActions.clearEvents()),
        deleteEvent: (eventId) => dispatch(eventsActions.deleteEvent(eventId)),
        filterEvents: (eventName) => dispatch(eventsActions.filterEvents(eventName)),
        formDataEvent: (value, field) => dispatch(eventsActions.formDataEvent(value, field)),
        addEvent: (name, place, date, time) => dispatch(eventsActions.addEvent(name, place, date, time)),
        getEvents: () => dispatch(eventsActions.getEvents()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events)